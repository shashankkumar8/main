const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

const html = fs.readFileSync(path.join(process.cwd(), 'index.html'));
const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, 'http://127.0.0.1').pathname;
  if (pathname === '/' || pathname === '/index.html') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(html);
    return;
  }
  if (pathname === '/favicon.svg' && fs.existsSync('favicon.svg')) {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    fs.createReadStream('favicon.svg').pipe(res);
    return;
  }
  res.writeHead(404);
  res.end('Not found');
});

(async () => {
  await new Promise(resolve => server.listen(4173, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));

  try {
    await page.goto('http://127.0.0.1:4173', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.panel[data-name="Home"]');

    // A real pointer move must reveal the custom arrow and suppress the native desktop cursor.
    await page.mouse.move(420, 340);
    await page.waitForTimeout(100);
    const cursor = await page.evaluate(() => ({
      visible: document.querySelector('#pointerCursor').classList.contains('visible'),
      rootClass: document.documentElement.classList.contains('has-custom-cursor'),
      left: document.querySelector('#pointerCursor').style.left,
      top: document.querySelector('#pointerCursor').style.top
    }));
    if (!cursor.visible || !cursor.rootClass || cursor.left !== '420px' || cursor.top !== '340px') {
      throw new Error('Custom arrow did not appear at the pointer: ' + JSON.stringify(cursor));
    }

    // Dispatch a wheel gesture over the fixed header to prove capture-phase navigation works there.
    await page.locator('.topbar').dispatchEvent('wheel', {
      deltaY: 120, deltaX: 0, bubbles: true, cancelable: true
    });
    await page.waitForTimeout(1500);
    const afterWheel = await page.evaluate(() => ({
      transform: getComputedStyle(document.querySelector('#track')).transform,
      current: document.querySelector('#currentSection').textContent
    }));
    if (afterWheel.current !== 'Build') {
      throw new Error('Wheel navigation did not advance from Home to Build: ' + JSON.stringify(afterWheel));
    }

    // Keyboard navigation must continue to work after the wheel gesture.
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(1500);
    const afterKeyboard = await page.locator('#currentSection').textContent();
    if (afterKeyboard !== 'Work') throw new Error('ArrowRight did not navigate to Work: ' + afterKeyboard);

    if (pageErrors.length) throw new Error('Browser runtime errors: ' + pageErrors.join(' | '));
    console.log('PASS: custom cursor, wheel over fixed header, keyboard navigation, no page errors.');
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
