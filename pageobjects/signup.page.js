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

    async formHeading(data,assert)
    {
        await expect(Sl.$(data.selectors.page_heading)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async firstNamePlaceholderText(data,assert)
    {
        await expect(Sl.attr(data.selector_type, data.selectors.first_name)).toHaveAttributeContaining(data.selector_type,assert)
    }

    //---------------------------------------------------------

    async lastNamePlaceholderText(data,assert)
    {
        await expect(Sl.attr(data.selector_type, data.selectors.last_name)).toHaveAttributeContaining(data.selector_type,assert)
    }

    //---------------------------------------------------------

    async emailPlaceholderText(data,assert)
    {
        await expect(Sl.attr(data.selector_type, data.selectors.email)).toHaveAttributeContaining(data.selector_type,assert)
    }

    //---------------------------------------------------------

    async passwordPlaceholderText(data,assert)
    {
        await expect(Sl.attr(data.selector_type, data.selectors.password)).toHaveAttributeContaining(data.selector_type,assert)
    }

    //--------------------------------------------------------

    async signUpButtonText(data,assert)
    {
        await expect(Sl.dynamic(data.selectors.submit, data.selector_type)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async clickSignUp(data)
    {
       const button =  await Sl.$(data.selectors.signUp);
       button.click();
       await browser.pause(2000);
       button.click();

    }

    //---------------------------------------------------------

    async fillForm(first_name,last_name,email,password,data)
    {
        await Sl.attr(data.selector_type, data.selectors.first_name).setValue(first_name);
        await Sl.attr(data.selector_type, data.selectors.last_name).setValue(last_name);
        await Sl.attr(data.selector_type, data.selectors.email).setValue(email);
        await Sl.attr(data.selector_type, data.selectors.password).setValue(password);
    }

    //---------------------------------------------------------

    async fillAndSignUp(first_name,last_name,email,password,data)
    {
        await this.fillForm(first_name,last_name,email,password,data)
        await this.clickSignUp(data)
        await browser.pause(2000);

    }

    //---------------------------------------------------------

    async signUpAndAssert(first_name,last_name,email,password,data,assert,assert_signup)
    {
        await this.fillAndSignUp(first_name,last_name,email,password,data)
        await expect(Sl.$(data.selectors.alert_msg)).toHaveTextContaining(assert);
        await this.formHeading(data,assert_signup);
    }

    //---------------------------------------------------------

    async signUpWithValidData(first_name,last_name,email,password,data,assert)
    {
        await this.fillAndSignUp(first_name,last_name,email,password,data)
        await expect(Sl.$(data.selectors.page_heading)).toHaveTextContaining(assert);

    }

    //---------------------------------------------------------

    async signUpWithBlankTextfields(data,assert,assert_signup)
    {
        await this.clickSignUp(data)
        await browser.pause(2000);
        await expect(Sl.$(data.selectors.alert_msg)).toHaveTextContaining(assert);
        await this.formHeading(data,assert_signup);

    }
}

module.exports = new SignupPage();