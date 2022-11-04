const Page = require('./../Page');

const data = require("../data/signin");
const {supportsColor} = require("chalk");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SigninPage extends Page {

    constructor() {
        super();
        this.params.page.id = "SI";
        this.params.page.name = "Sign-In";
        this.params.page.path = "/";
        this.params.page.url = this.base_url+this.params.page.path;
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
    async invalidLogin( email, password, assert ){
        await super.select(data.selector_type, data.selectors.emailtextfield).setValue(email);
        await super.select(data.selector_type, data.selectors.passtextfield).setValue(password);
        await super.select(data.selector_type, data.selectors.submit).click();
        await expect(sl.role("alertdialog")).toHaveTextContaining(assert);
    }
    //---------------------------------------------------------

}

module.exports = new SigninPage();
