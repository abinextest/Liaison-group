class PayGapPage{

  constructor(page)
  {
    this.page = page;
    this.pdfLink = page.getByRole('link', { name: 'click here' });

  
  }

   async clickPdfLinkButton()
   {
        await this.pdfLink.click();
   }


}

module.exports = {PayGapPage};