const { HomePage } = require('./HomePage');
const { IntegratedCarePage } = require('./IntegratedCarePage');
const { PayGapPage } = require('./PayGapPage');
class POManager {
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.integratedCarePage = new IntegratedCarePage(this.page);
        this.payGapPage = new PayGapPage(this.page);
    }

    getHomePage() {
        return this.homePage;
    }

    getIntegratedCarePage() {

        return this.integratedCarePage;
    }

    getPayGapPage() {
        return this.payGapPage;
    }

}

module.exports = { POManager };

