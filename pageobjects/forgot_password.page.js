const Page = require('./../Page');
const Sl = require('./../Selector');
const click = require("webdriverio/build/commands/element/click");

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

    async invalidEmailAssertion(data,email,assert)
    {
        await this.forgotPassword(data)
        await Sl.dusk(data.elements.email).setValue(email)
        await Sl.dusk(data.elements.send_code_button).click()
        await expect(Sl.role(data.elements.alert_box)).toHaveTextContaining(assert)
    }

    //---------------------------------------------------------

    async refresh()
    {
        await browser.refresh();
    }

    //---------------------------------------------------------

    async validEmail(data,email,assert,mail_email,mail_password)
    {
        await this.forgotPassword(data)
        await Sl.dusk(data.elements.email).setValue(email)
        await Sl.dusk(data.elements.send_code_button).click()
        await browser.url(data.mailtrap_path)
        await Sl.id(data.elements.mail_email).setValue(mail_email)
        await Sl.$(data.elements.mail_next_button).click()
        await Sl.id(data.elements.mail_password).setValue(mail_password)
        const login = await Sl.name(data.elements.mail_login_button)
        login.scrollIntoView()
        await browser.pause(2000)
        login.click()
        await Sl.$(data.elements.mail_recent_email).click()
        await expect(Sl.$(data.elements.mail_senders_email)).toHaveTextContaining(assert)
    }

    //---------------------------------------------------------

    async validEmailreceiver(data,email,assert,mail_email,mail_password)
    {
        await this.forgotPassword(data)
        await Sl.dusk(data.elements.email).setValue(email)
        await Sl.dusk(data.elements.send_code_button).click()
        await browser.url(data.mailtrap_path)
        await Sl.id(data.elements.mail_email).setValue(mail_email)
        await Sl.$(data.elements.mail_next_button).click()
        await browser.pause(3000);
        await Sl.id(data.elements.mail_password).setValue(mail_password)
        const login = await Sl.name(data.elements.mail_login_button)
        login.scrollIntoView()
        await browser.pause(2000)
        login.click()
        await Sl.$(data.elements.mail_recent_email).click()
        await expect(Sl.$(data.elements.mail_receiver_email)).toHaveTextContaining(assert)
    }

    //---------------------------------------------------------

    async validEmailLink(data,email,assert,mail_email,mail_password)
    {
        await this.forgotPassword(data)
        await Sl.dusk(data.elements.email).setValue(email)
        await Sl.dusk(data.elements.send_code_button).click()
        await browser.url(data.mailtrap_path)
        await browser.pause(3000)
        await Sl.id(data.elements.mail_email).setValue(mail_email)
        await browser.pause(3000)
        await Sl.$(data.elements.mail_next_button).click()
        await Sl.id(data.elements.mail_password).setValue(mail_password)
        const login = await Sl.name(data.elements.mail_login_button)
        login.scrollIntoView()
        await browser.pause(2000)
        login.click()
        await browser.pause(3000)
        await Sl.$(data.elements.mail_recent_email).click()
        await browser.pause(3000)
        //const frame = await Sl.$('iframe[data-test-id="message_view_iframe"]')
        const iframe = await Sl.testid("message_view_iframe")
        browser.switchToFrame(iframe)
        await browser.pause(5000)
        await expect(Sl.$('=Click to Reset')).toHaveTextContaining(assert)
        //await expect(Sl.$(data.elements.page_subheading)).toHaveTextContaining(assert)
    }

}
module.exports = new FpasswordPage();
//----------------------------------------------------------------------------------------------------------------------