const Page = require('./../Page');
const Sl = require('./../Selector');
const Data = require("../data/signin");
const assert = require("assert");
const getText = require("webdriverio/build/commands/element/getText");

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

    async refresh()
    {
        await browser.refresh();
        await browser.pause(2000);
    }

    //---------------------------------------------------------

    async assertion(assert)
    {
        await expect(Sl.$('h3')).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async fillForm(email, password, data)
    {
        await Sl.dynamic(data.selectors.email, data.selector_type).setValue(email);
        await Sl.dynamic(data.selectors.password, data.selector_type).setValue(password);
    }

    //---------------------------------------------------------

    async fillAndRemoveEmail(email,data)
    {
        const emailTextField = await Sl.dynamic(data.selectors.email, data.selector_type);
        emailTextField.setValue(email);
        await browser.pause(2000);
        emailTextField.clearValue();
    }

    //---------------------------------------------------------

    async fillAndRemovePassword(password,data) {
        const passwordTextField = await Sl.dynamic(data.selectors.password, data.selector_type);
        passwordTextField.setValue(password);
        await browser.pause(2000);
        passwordTextField.clearValue();
    }

    //---------------------------------------------------------

    async submitFunctionality(data,assert)
    {
        await expect(Sl.dynamic(data.selectors.submit, data.selector_type)).toHaveTextContaining(assert);
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

    async submitAndLogout(email, password, data, assert)
    {
        await this.fillAndSubmit(email, password, data)
        await expect(Sl.$('h2')).toHaveTextContaining(assert);
        await Sl.role("menuitem").moveTo(data);
        await Sl.$('=Logout').click(data);
    }

    //---------------------------------------------------------

    async signInAndBrowseBack(email, password, data,assert)
    {
        await this.fillForm(email, password, data)
        await this.clickSubmit(data)
        await browser.pause(2000);
        await browser.back();
        await browser.pause(2000);
        await browser.forward();
        await expect(Sl.$('h2')).toHaveTextContaining(assert);
        await Sl.role("menuitem").moveTo(data);
        await Sl.$('=Logout').click(data);

    }

    //---------------------------------------------------------

    async signOutAndBrowseBack(email, password, data,assert)
    {
        await this.fillForm(email, password, data)
        await this.clickSubmit(data)
        await Sl.role("menuitem").moveTo(data);
        await Sl.$('=Logout').click(data);
        await browser.pause(2000);
        await browser.back();
        await expect(Sl.$('h3')).toHaveTextContaining(assert);

    }

    //---------------------------------------------------------

    async forgotPassword(assert)
    {
        await Sl.$('=Forgot Password?').click();
        await expect(Sl.$('h3')).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async eyeButton(password,data,assert)
    {
        await Sl.dynamic(data.selectors.password, data.selector_type).setValue(password);
        await browser.pause(2000);
        await Sl.icon("eye").click();
    }
}

module.exports = new SigninPage();

//----------------------------------------------------------------------------------------------------------------------