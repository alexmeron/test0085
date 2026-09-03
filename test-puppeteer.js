import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173');
  
  // Click on "Button" in the sidebar
  const items = await page.$$('button');
  for (const item of items) {
    const text = await page.evaluate(el => el.textContent, item);
    if (text.trim() === 'Button') {
      await item.click();
      break;
    }
  }

  await new Promise(r => setTimeout(r, 500)); // wait for render

  const buttonComputedStyles = await page.evaluate(() => {
    // Find a button inside the showcase area (not the sidebar)
    const btn = document.querySelector('main div button');
    if (!btn) return "not found";
    const computed = window.getComputedStyle(btn);
    return {
      className: btn.className,
      backgroundColor: computed.backgroundColor,
      color: computed.color,
      borderRadius: computed.borderRadius,
      padding: computed.padding,
      fontSize: computed.fontSize
    };
  });

  console.log(JSON.stringify(buttonComputedStyles, null, 2));
  await browser.close();
})();
