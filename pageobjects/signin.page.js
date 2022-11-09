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
        //this.params.page.path = "";
        this.params.page.url = this.base_url;
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

    async h3_assertion(assert)
    {
        await expect(Sl.$(Data.selectors.h3)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async p_assertion(assert)
    {
        await expect(Sl.$(Data.selectors.p)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async h2_assertion(assert)
    {
        await expect(Sl.$(Data.selectors.h2)).toHaveTextContaining(assert);
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

    async submitFunctionality(data,assert,assertsignin)
    {
        await expect(Sl.dynamic(data.selectors.submit, data.selector_type)).toHaveTextContaining(assert);
        await this.h3_assertion(assertsignin);
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

    async submitAndAssert(email, password, data, assert,assertsignin)
    {
        await this.fillAndSubmit(email, password, data)
        await expect(Sl.role(Data.selectors.alert_box)).toHaveTextContaining(assert);
        await this.h3_assertion(assertsignin);
    }

    //---------------------------------------------------------

    async moveAndLogout(data)
    {
        await Sl.role(Data.selectors.menu_item).moveTo(data);
        await Sl.$(Data.selectors.logout_button).click(data);
    }

    //---------------------------------------------------------

    async submitAndLogout(email, password, data, assert,assertsignin)
    {
        await this.fillAndSubmit(email, password, data)
        await this.h2_assertion(assert)
        await this.moveAndLogout(data);
        await this.h3_assertion(assertsignin);
    }

    //---------------------------------------------------------

    async signInAndBrowseBack(email, password, data,assert,assertsignin)
    {
        await this.fillAndSubmit(email, password, data)
        await browser.pause(2000);
        await browser.back();
        await this.h3_assertion(assertsignin);
        await browser.pause(2000);
        await browser.forward();
        await this.h2_assertion(assert);
        await this.moveAndLogout(data);

    }

    //---------------------------------------------------------

    async signOutAndBrowseBack(email, password, data,assert,assertsignin)
    {
        await this.fillAndSubmit(email, password, data)
        await this.h2_assertion(assert)
        await this.moveAndLogout(data);
        await this.h3_assertion(assertsignin);
        await browser.pause(2000);
        await browser.back();

    }

    //---------------------------------------------------------

    async forgotPassword(assert)
    {
        await Sl.$(Data.selectors.forgot_password).click();
        await this.h3_assertion(assert);
    }

    //---------------------------------------------------------

    async eyeButton(password,data,assert)
    {
        await Sl.dynamic(data.selectors.password, data.selector_type).setValue(password);
        await browser.pause(2000);
        await Sl.icon(Data.selectors.eye_icon).click();
        await this.h3_assertion(assert);
    }

    //---------------------------------------------------------

    async linkText(assert)
    {
        //await this.h3_assertion(assertsignin);
        await expect(Sl.$(Data.selectors.copyright)).toHaveTextContaining(assert);

    }
}

module.exports = new SigninPage();

//----------------------------------------------------------------------------------------------------------------------