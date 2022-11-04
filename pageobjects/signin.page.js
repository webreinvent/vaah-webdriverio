const Page = require('./../Page');
const Sl = require('./../Selector');

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
    async fillForm(email, password, data)
    {
        await Sl.dynamic(data.selectors.email, data.selector_type).setValue(email);
        await Sl.dynamic(data.selectors.password, data.selector_type).setValue(password);
    }
    //---------------------------------------------------------
    async clickSubmit(data)
    {
        await Sl.dynamic(data.selectors.submit, data.selector_type).click();
    }
    //---------------------------------------------------------
    async fillAndSubmit(email, password, data)
    {
        await this.fillForm(email, password, data)
        await this.clickSubmit(data)

    }
    //---------------------------------------------------------
    async submitAndAssert(email, password, data, assert)
    {
        await this.fillAndSubmit(email, password, data)
        await expect(Sl.role("alertdialog")).toHaveTextContaining(assert);
    }
    //---------------------------------------------------------
    async emptyPassword(email, password, data, assert)
    {
        await this.fillAndSubmit(email, password, data)
        await expect(Sl.role("alertdialog")).toHaveTextContaining(assert);
    }
    //---------------------------------------------------------

}

module.exports = new SigninPage();
