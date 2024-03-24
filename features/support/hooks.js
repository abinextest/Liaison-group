const playwright = require('@playwright/test');
const { POManager } = require('../../pageobject/POManager');
const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber')


Before(async function () {

    const browser = await playwright.chromium.launch({ headless: false});
    const context = await browser.newContext({viewport:{width:1920, height:1080}});
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
});

AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot1.png' });
    }
});

After(function () {
    console.log("End of test");
});
