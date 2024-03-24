class IntegratedCarePage{

  constructor(page)
  {
    this.page = page;
    this.londonRegionButton = page.getByRole('link', { name: 'London' });
    this.southEastRegionButton = page.getByRole('link', { name: 'South East London' });
  
  }

   async clickLondonRegionButton()
   {
        await this.londonRegionButton.click();
   }

   async clickSouthEastRegionButton()
   {
        await this.southEastRegionButton.click();
   }




}

module.exports = {IntegratedCarePage};