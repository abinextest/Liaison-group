class HomePage{

  constructor(page)
  {
    this.page = page;
    this.acceptCookies = page.getByRole('button', { name: 'Accept' });
    this.workForceButton = page.getByRole('link', { name: 'Liaison Group' });
    this.workForcePlatformButton= page.getByRole('link', { name: 'Workforce Platform' });
    this.integratedCareSystem = page.getByRole('link', { name: 'Integrated Care Systems' });
    this.payGapButton = page.locator("//a[normalize-space()='Gender Pay Gap Report']");
    this.fullName = page.getByPlaceholder('Full Name');
    this.emailAddress = page.getByPlaceholder('Email address');
    this.organisation = page.getByPlaceholder('Organisation');
    this.submitButton = page.getByRole('group', { name: 'footer form' }).getByRole('button');
  }

  async goTo()
  {
    await this.page.goto("https://www.liaisongroup.com");
    await this.acceptCookies.click(); // Accept cookies if present
  }

   async navigateToWorkForcePage()
   {
        await this.workForceButton.first().click();
   }

   async navigateToIntegratedCarePage()
   {
        await this.integratedCareSystem.first().click();
   }

   async navigateToPayGapPage()
   {
        await this.payGapButton.click();
   }

   
   async fillUpToDateForm()
   {
    await this.fullName.click();
    await this.emailAddress.click();
    await this.organisation.click();
   }

   async submitUpToDateForm()
   {
    await this.submitButton.click();
   }

}

module.exports = {HomePage};