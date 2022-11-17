const Page = require('./../Page');
const Sl = require('./../Selector');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FpasswordPage extends Page {

    constructor() {
        super();
        this.params.page.id = "FP";
        this.params.page.name = "Forgot-Password";
        this.params.page.url = this.base_url;
    }


    async open(url = null) {
        if (url) {
            this.params.page.url = url
        }
        return super.open(this.params.page.url);
    }

    //---------------------------------------------------------

    async forgotPassword(data,assert)
    {
        await Sl.$(data.selectors.forgot_password).click();
        await this.pageHeading(data,assert);
    }

    //---------------------------------------------------------

    async pageHeading(data,assert)
    {
        await expect(Sl.$(data.selectors.page_heading)).toHaveTextContaining(assert);
    }

}
module.exports = new FpasswordPage();
//----------------------------------------------------------------------------------------------------------------------