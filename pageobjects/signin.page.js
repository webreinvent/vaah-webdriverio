const Page = require('./../Page');
const Sl = require('./../Selector');
const Data = require("../data/signin");

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

    async pageHeading(assert)
    {
        await expect(Sl.$(Data.selectors.page_heading)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async pageSubHeading(assert)
    {
        await expect(Sl.$(Data.selectors.page_subheading)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async heading(assert)
    {
        await expect(Sl.$(Data.selectors.heading)).toHaveTextContaining(assert);
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
        await expect(Sl.role(Data.selectors.alert_box)).toHaveTextContaining(assert);
        await this.pageHeading(assertsignin);
    }

    //---------------------------------------------------------

    async moveAndLogout(data)
    {
        await Sl.role(Data.selectors.menu_item).moveTo(data);
        await Sl.$(Data.selectors.logout_button).click(data);
    }

    //---------------------------------------------------------

    async signInAndSignOut(email, password, data, assert)
    {
        await this.fillAndSignIn(email, password, data)
        await this.heading(assert)
        await this.moveAndLogout(data);
    }

    //---------------------------------------------------------

    async signInAndBrowseBack(email, password, data,assert,assertsignin)
    {
        await this.fillAndSignIn(email, password, data)
        await browser.pause(2000);
        await browser.back();
        await this.pageHeading(assertsignin);
        await browser.pause(2000);
        await browser.forward();
        await this.heading(assert);
        await this.moveAndLogout(data);

    }

    //---------------------------------------------------------

    async signOutAndBrowseBack(email, password, data,assert,assertsignin)
    {
        await this.fillAndSignIn(email, password, data)
        await this.heading(assert)
        await this.moveAndLogout(data);
        await browser.back();
        await this.pageHeading(assertsignin);

    }

    //---------------------------------------------------------

    async forgotPassword(assert)
    {
        await Sl.$(Data.selectors.forgot_password).click();
        await this.pageHeading(assert);
    }

    //---------------------------------------------------------

    async eyeButton(password,data,assert)
    {
        const passwordTextField = await Sl.dynamic(data.selectors.password, data.selector_type);
        passwordTextField.setValue(password);
        await browser.pause(2000);
        await Sl.icon(Data.selectors.eye_icon).click();
        await expect(passwordTextField).toHaveValueContaining(assert)

    }

    //---------------------------------------------------------

    async linkText(assert)
    {
        await expect(Sl.$(Data.selectors.link_text)).toHaveTextContaining(assert);

    }
}

module.exports = new SigninPage();

//----------------------------------------------------------------------------------------------------------------------