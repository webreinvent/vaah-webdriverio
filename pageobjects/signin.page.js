const Page = require('./../Page');
const Sl = require('./../Selector');
const Data = require("../data/signin");
const assert = require("assert");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SigninPage extends Page {

    constructor() {
        super();
        this.params.page.id = "SI";
        this.params.page.name = "Sign-In";
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

    async pageHeading(data,assert)
    {
        await expect(Sl.$(data.selectors.page_heading)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async pageSubHeading(data,assert)
    {
        await expect(Sl.$(data.selectors.page_subheading)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async heading(data,assert)
    {
        await expect(Sl.$(data.selectors.heading)).toHaveTextContaining(assert);
    }


    //---------------------------------------------------------

    async fillForm(email, password, data)
    {
        await Sl.dynamic(data.selectors.email, data.selector_type).setValue(email);
        await Sl.dynamic(data.selectors.password, data.selector_type).setValue(password);
    }

    //---------------------------------------------------------

    async fillAndRemoveEmail(email,data,assertvalue,assert)
    {
        const emailTextField = await Sl.dynamic(data.selectors.email, data.selector_type);
        emailTextField.setValue(email);
        await expect(emailTextField).toHaveValueContaining(assertvalue);
        emailTextField.clearValue();
        await expect(emailTextField).toHaveValueContaining(assert);

    }

    //---------------------------------------------------------

    async fillAndRemovePassword(password,data,assertvalue,assert) {
        const passwordTextField = await Sl.dynamic(data.selectors.password, data.selector_type);
        passwordTextField.setValue(password);
        await expect(passwordTextField).toHaveValueContaining(assertvalue);
        passwordTextField.clearValue();
        await expect(passwordTextField).toHaveValueContaining(assert);
    }

    //---------------------------------------------------------

    async signInButtonText(data,assert)
    {
        await expect(Sl.dynamic(data.selectors.submit, data.selector_type)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async clickSignIn(data)
    {
        await Sl.dynamic(data.selectors.submit, data.selector_type).click();
    }

    //---------------------------------------------------------

    async fillAndSignIn(email, password, data)
    {
        await this.fillForm(email, password, data)
        await this.clickSignIn(data)

    }

    //---------------------------------------------------------

    async signInAndAssert(email, password, data, assert,assertsignin)
    {
        await this.fillAndSignIn(email, password, data)
        await expect(Sl.role(data.selectors.alert_box)).toHaveTextContaining(assert);
        await this.pageHeading(data,assertsignin);
    }

    //---------------------------------------------------------

    async moveAndLogout(data)
    {
        await Sl.role(data.selectors.menu_item).moveTo();
        await Sl.$(data.selectors.logout_button).click();
    }

    //---------------------------------------------------------

    async signInAndSignOut(email, password, data, assert)
    {
        await this.fillAndSignIn(email, password, data)
        await this.heading(data,assert)
        await this.moveAndLogout(data);
    }

    //---------------------------------------------------------

    async signInAndBrowseBack(email, password, data,assert,assertsignin)
    {
        await this.fillAndSignIn(email, password, data)
        await browser.pause(2000);
        await browser.back();
        await this.pageHeading(data,assertsignin);
        await browser.pause(2000);
        await browser.forward();
        await this.heading(data,assert);
        await this.moveAndLogout(data);

    }

    //---------------------------------------------------------

    async signOutAndBrowseBack(email, password, data,assert,assertsignin)
    {
        await this.fillAndSignIn(email, password, data)
        await this.heading(data,assert)
        await this.moveAndLogout(data);
        await browser.back();
        await this.pageHeading(data,assertsignin);

    }

    //---------------------------------------------------------

    async forgotPassword(data,assert)
    {
        await Sl.$(data.selectors.forgot_password).click();
        await this.pageHeading(data,assert);
    }

    //---------------------------------------------------------

    async eyeButton(password,data,assert,assertext)
    {
        const passwordTextField = await Sl.dynamic(data.selectors.password, data.selector_type);
        passwordTextField.setValue(password);
        await expect(passwordTextField).toHaveAttributeContaining(data.attribute_name,assert)
        await browser.pause(2000);
        await Sl.icon(data.selectors.eye_icon).click();
        await expect(passwordTextField).toHaveAttributeContaining(data.attribute_name,assertext)


    }

    //---------------------------------------------------------

    async linkText(data,assert)
    {
        await expect(Sl.$(data.selectors.link_text)).toHaveTextContaining(assert);

    }
}

module.exports = new SigninPage();

//----------------------------------------------------------------------------------------------------------------------