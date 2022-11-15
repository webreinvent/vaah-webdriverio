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

    async firstNameLabelText(data,assert)
    {
        await expect(Sl.$(data.selectors.first_name_label_text)).toHaveTextContaining(assert)
    }

    //---------------------------------------------------------

    async lastNameLabelText(data,assert)
    {
        await expect(Sl.$(data.selectors.last_name_label_text)).toHaveTextContaining(assert)
    }

    //---------------------------------------------------------

    async emailLabelText(data,assert)
    {
        await expect(Sl.$(data.selectors.email_label_text)).toHaveTextContaining(assert)
    }

    //---------------------------------------------------------

    async fillAndRemoveFirstName(first_name,data,assert_value,assert) {
        const firstNameTextField = await Sl.attr(data.selector_type, data.selectors.first_name)
        firstNameTextField.setValue(first_name);
        await expect(firstNameTextField).toHaveValueContaining(assert_value);
        firstNameTextField.clearValue();
        await expect(firstNameTextField).toHaveValueContaining(assert);
    }

    //---------------------------------------------------------

    async fillAndRemoveLastName(last_name,data,assert_value,assert) {
        const lastNameTextField = await Sl.attr(data.selector_type, data.selectors.last_name)
        lastNameTextField.setValue(last_name);
        await expect(lastNameTextField).toHaveValueContaining(assert_value);
        lastNameTextField.clearValue();
        await expect(lastNameTextField).toHaveValueContaining(assert);
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
       //await browser.pause(2000);
       button.click();
       await browser.pause(2000);
       button.click();

    }

    //---------------------------------------------------------

    async fillForm(first_name,last_name,email,password,data)
    {
        await Sl.attr(data.selector_type, data.selectors.first_name).setValue(first_name);
        await Sl.attr(data.selector_type, data.selectors.last_name).setValue(last_name);
        await browser.pause(1000);
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

    async signUpAndAssertMsg(first_name,last_name,email,password,data,assert,assert_signup)
    {
        await this.fillAndSignUp(first_name,last_name,email,password,data)
        await expect(Sl.$(data.selectors.alert_msg)).toHaveTextContaining(assert);
        await this.formHeading(data,assert_signup);
    }

    //---------------------------------------------------------

    async signUpAndAssertBox(first_name,last_name,email,password,data,assert,assert_signup)
    {
        await this.fillAndSignUp(first_name,last_name,email,password,data)
        await expect(Sl.role(data.selectors.alert_box)).toHaveTextContaining(assert);
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