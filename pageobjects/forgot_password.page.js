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

    async forgotPassword(data)
    {
        await Sl.$(data.elements.forgot_password).click();
    }

    //---------------------------------------------------------

    async pageHeading(data,assert)
    {
        await this.forgotPassword(data)
        await expect(Sl.$(data.elements.page_heading)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async pageSubheading(data,assert)
    {
        await this.forgotPassword(data)
        await expect(Sl.$(data.elements.page_subheading)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async emailPlaceholderText(data,assert)
    {
        await this.forgotPassword(data)
        await expect(Sl.dusk(data.elements.email)).toHaveAttributeContaining(data.attr_type,assert)
    }

    //---------------------------------------------------------

    async sendCodeButtonText(data,assert)
    {
        await this.forgotPassword(data)
        await expect(Sl.dusk(data.elements.send_code_button)).toHaveTextContaining(assert)
    }

    //---------------------------------------------------------

    /*async (data,assert)
    {
        await this.forgotPassword(data)
        await expect(Sl.dusk(data.elements.send_code_button)).toHaveTextContaining(assert)
    }*/

}
module.exports = new FpasswordPage();
//----------------------------------------------------------------------------------------------------------------------