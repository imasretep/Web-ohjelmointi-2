const puppeteer = require ("puppeteer");

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("http://localhost:8081/comment");

    await page.waitForSelector("#test-select");
    await page.select("#test-select", "second-option-value");

    await page.waitForSelector("#comment");
    await page.type("#comment", "Test comment, hello world!");

    console.log("button click");
    await page.click("button.btn-success");

    await page.waitForSelector("h4");
    const successMessage = await page.$eval("h4", el => el.textContent);
    console.log(successMessage);

    await browser.close();
})();
