const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test');

Given('I am on the home page', { timeout: 100 * 1000 }, async function () {
    const pageTitle = 'Liaison Group';
    this.homePage = this.poManager.getHomePage();
    await this.homePage.goTo();
    await expect(this.page).toHaveTitle(pageTitle);
});

When('I navigate to the workforce page', async function () {
    await this.homePage.navigateToWorkForcePage();
});

Then('I should see the workforce page successfully', async function () {
    const workForcePlatformButton = this.page.getByRole('link', { name: 'Workforce Platform' });
    const workForcePlatformImage = this.page.locator("//*[name()='image' and @id='s']");
    await expect(workForcePlatformImage).toBeVisible();

});

When('I navigate to the Integrated care system page', async function () {
    const londonRegion = this.page.locator("#londonBtn");
    await this.homePage.navigateToIntegratedCarePage();
    await expect(londonRegion).toBeVisible();
});

// Await the map to load on the page
When('I click on London region on the Map', { timeout: 100 * 1000 }, async function () {
    const londonHeading = this.page.locator("//h3[@id='popupTitle']");
    const londonheadingMessage = 'london Click a region to see savings';
    this.integratedCarePage = this.poManager.getIntegratedCarePage();
    await this.integratedCarePage.clickLondonRegionButton();
    await expect(londonHeading).toHaveText(londonheadingMessage);
});

When('I click on the SouthEast region', async function () {
    await this.integratedCarePage.clickSouthEastRegionButton();
});

Then('I should see the southeast region message', async function () {
    const southEastLondonMessage = this.page.getByText('We can generate cash savings');
    await expect(southEastLondonMessage).toBeVisible();
});

When('I navigate to the Gender pay gap page', { timeout: 100 * 1000 }, async function () {
    const genderPayGapHeading = this.page.locator("//h2[normalize-space()='Gender Pay Gap Report']");
    await this.homePage.navigateToPayGapPage();
    await expect(genderPayGapHeading).toBeVisible();
});

When('I click on the PDF link', async function () {
    this.payGapPage = this.poManager.getPayGapPage();
    await this.payGapPage.clickPdfLinkButton();
});

Then('I should see the gender pay gap pdf report', async function () {
    const payGapPageTitle = 'Gender Pay Gap Report - Liaison Group';
    console.log(await this.page.title())
    await expect(this.page).toHaveTitle(payGapPageTitle);
});

//There is a bug with form
When('I fill the upto date form with incorrect data', async function () {
    await this.homePage.fillUpToDateForm();
});

When('I click on the submit button', async function () {
    await this.homePage.submitUpToDateForm();
});

Then('I should see error message', { timeout: 100 * 1000 },  async function () {
    const errorMessage = 'There was a problem with your submission. Errors are marked below.';
    const errorLocator = this.page.locator("div[class='frm_error_style']");
    await expect(errorLocator).toHaveText(errorMessage);
});