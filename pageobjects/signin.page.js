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
        this.params.page.url = this.base_url;
    }

    //---------------------------------------------------------

    async clickSignIn(data)
    {
        await Sl.dynamic(data.selectors.submit, data.selector_type).click();
    }

    //---------------------------------------------------------

    async eyeButton(password,data,assert,assert_text)
    {
        const passwordTextField = await Sl.dynamic(data.selectors.password, data.selector_type);
        passwordTextField.setValue(password);
        await expect(passwordTextField).toHaveAttributeContaining(data.attribute_name,assert)
        await browser.pause(2000);
        await Sl.icon(data.selectors.eye_icon).click();
        await expect(passwordTextField).toHaveAttributeContaining(data.attribute_name,assert_text)
    }

    //---------------------------------------------------------

    async fillAndRemoveEmail(email,data,assert_value,assert)
    {
        const emailTextField = await Sl.dynamic(data.selectors.email, data.selector_type);
        emailTextField.setValue(email);
        await expect(emailTextField).toHaveValueContaining(assert_value);
        emailTextField.clearValue();
        await expect(emailTextField).toHaveValueContaining(assert);
    }

    //---------------------------------------------------------

    async fillAndRemovePassword(password,data,assert_value,assert) {
        const passwordTextField = await Sl.dynamic(data.selectors.password, data.selector_type);
        passwordTextField.setValue(password);
        await expect(passwordTextField).toHaveValueContaining(assert_value);
        passwordTextField.clearValue();
        await expect(passwordTextField).toHaveValueContaining(assert);
    }

    //---------------------------------------------------------

    async fillAndSignIn(email,password,data)
    {
        await this.fillForm(email,password,data)
        await this.clickSignIn(data)
    }

    //---------------------------------------------------------

    async fillForm(email,password,data)
    {
        await Sl.dynamic(data.selectors.email, data.selector_type).setValue(email);
        await Sl.dynamic(data.selectors.password, data.selector_type).setValue(password);
    }

    //---------------------------------------------------------

    async forgotPassword(data,assert)
    {
        await Sl.$(data.selectors.forgot_password).click();
        await this.pageHeading(data,assert);
    }

    //---------------------------------------------------------

    async heading(data,assert)
    {
        await expect(Sl.$(data.selectors.heading)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async linkText(data,assert)
    {
        await expect(Sl.$(data.selectors.link_text)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async moveAndLogout(data)
    {
        await Sl.role(data.selectors.menu_item).moveTo();
        await Sl.$(data.selectors.logout_button).click();
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

    async refresh()
    {
        await browser.refresh();
        await browser.pause(2000);
    }

    //---------------------------------------------------------

    async signInAndAssert(email,password,data,assert,assert_signin)
    {
        await this.fillAndSignIn(email,password,data)
        await expect(Sl.role(data.selectors.alert_box)).toHaveTextContaining(assert);
        await this.pageHeading(data,assert_signin);
    }

    //---------------------------------------------------------

    async signInAndBrowseBack(email,password,data,assert,assert_signin)
    {
        await this.fillAndSignIn(email, password, data)
        await browser.pause(2000);
        await browser.back();
        await this.pageHeading(data,assert_signin);
        await browser.pause(2000);
        await browser.forward();
        await this.heading(data,assert);
        await this.moveAndLogout(data);
    }

    //---------------------------------------------------------

    async signInAndSignOut(email,password,data,assert)
    {
        await this.fillAndSignIn(email,password,data)
        await this.heading(data,assert)
        await this.moveAndLogout(data);
    }

    //--------------------------------------------------------

    async signInButtonText(data,assert)
    {
        await expect(Sl.dynamic(data.selectors.submit, data.selector_type)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async signOutAndBrowseBack(email,password,data,assert,assert_signin)
    {
        await this.fillAndSignIn(email,password,data)
        await this.heading(data,assert)
        await this.moveAndLogout(data);
        await browser.back();
        await this.pageHeading(data,assert_signin);
    }

    //---------------------------------------------------------
}
module.exports = new SigninPage();
//----------------------------------------------------------------------------------------------------------------------