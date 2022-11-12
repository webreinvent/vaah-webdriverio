const Page = require('./../Page');
const Sl = require('./../Selector');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage extends Page {

    constructor() {
        super();
        this.params.page.id = "SU";
        this.params.page.name = "Sign-Up";
        this.params.page.url = this.signup_url;
    }

    //---------------------------------------------------------

    async open (url=null)  {
        if(url)
        {
            this.params.page.url = url
        }
        return super.open(this.params.page.url);
    }

    //---------------------------------------------------------

    async refresh()
    {
        await browser.refresh();
        await browser.pause(2000);
    }
    //---------------------------------------------------------

    async pageHeading(data,assert)
    {
        await expect(Sl.$(data.selectors.page_heading)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------
}

module.exports = new SignupPage();