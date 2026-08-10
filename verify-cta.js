const { chromium } = require('playwright');
const path = require('path');
const OUT = 'C:\\Users\\safar\\AppData\\Local\\Temp\\claude\\c--Users-safar-Desktop-curanova-genexcel-main\\e666f307-e1ff-496a-a560-ff7fae7eae08\\scratchpad';

const PAGES = ['/platform', '/how-it-works', '/science', '/solutions/families', '/solutions/healthcare', '/solutions/schools', '/trust'];

(async () => {
  const browser = await chromium.launch();
  const errors = [];
  for (const scheme of ['light', 'dark']) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, colorScheme: scheme });
    const page = await context.newPage();
    page.on('console', (m) => { if (m.type() === 'error') errors.push(`[${scheme}] ${page.url()}: ${m.text()}`); });
    page.on('pageerror', (e) => errors.push(`[${scheme}] ${page.url()}: pageerror: ${e.message}`));
    for (const route of PAGES) {
      await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle' });
      const cta = page.locator('section').filter({ hasText: /Ready to|See the|Start Your|Questions About/ }).last();
      await cta.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      const fname = route.replace(/\//g, '_').slice(1);
      await page.screenshot({ path: path.join(OUT, `cta-${scheme}-${fname}.png`) });
    }
    await context.close();
  }
  await browser.close();
  console.log('ERRORS:', errors.length);
  errors.forEach((e) => console.log(e));
})();
