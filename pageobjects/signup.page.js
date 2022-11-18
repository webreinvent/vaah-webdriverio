const Page = require('./../Page');
const Sl = require('./../Selector');

/**
 * sub page containing specific elements and methods for a specific page
 */
class SignupPage extends Page {

    constructor() {
        super();
        this.params.page.id = "SU";
        this.params.page.name = "Sign-Up";
        this.params.page.url = this.signup_url;
    }

    //---------------------------------------------------------

    async clickSignUp(data)
    {
       const button =  await Sl.$(data.elements.signUp);
       button.click();
       await browser.pause(2000);
       button.click();
    }

    //---------------------------------------------------------

    async emailLabelText(data,assert)
    {
        await expect(Sl.$(data.elements.email_label_text)).toHaveTextContaining(assert)
    }

    //---------------------------------------------------------

    async emailPlaceholderText(data,assert)
    {
        await expect(Sl.attr(data.selector_attr, data.elements.email)).toHaveAttributeContaining(data.selector_attr,assert)
    }

    //---------------------------------------------------------

    async fillAndRemoveFirstName(first_name,data,assert_value,assert) {
        const firstNameTextField = await Sl.attr(data.selector_attr, data.elements.first_name)
        firstNameTextField.setValue(first_name);
        await expect(firstNameTextField).toHaveValueContaining(assert_value);
        firstNameTextField.clearValue();
        await expect(firstNameTextField).toHaveValueContaining(assert);
    }

    //---------------------------------------------------------

    async fillAndRemoveLastName(last_name,data,assert_value,assert) {
        const lastNameTextField = await Sl.attr(data.selector_attr, data.elements.last_name)
        lastNameTextField.setValue(last_name);
        await expect(lastNameTextField).toHaveValueContaining(assert_value);
        lastNameTextField.clearValue();
        await expect(lastNameTextField).toHaveValueContaining(assert);
    }

    //---------------------------------------------------------

    async fillAndRemovePassword(password,data,assert_value,assert) {
        const passwordTextField = await Sl.attr(data.selector_attr, data.elements.password)
        passwordTextField.setValue(password);
        await expect(passwordTextField).toHaveValueContaining(assert_value);
        passwordTextField.clearValue();
        await expect(passwordTextField).toHaveValueContaining(assert);
    }

    //---------------------------------------------------------

    async fillAndSignUp(first_name,last_name,email,password,data)
    {
        await this.fillForm(first_name,last_name,email,password,data)
        await this.clickSignUp(data)
        await browser.pause(2000);

    }

    //---------------------------------------------------------

    async fillForm(first_name,last_name,email,password,data)
    {
        await Sl.attr(data.selector_attr, data.elements.first_name).setValue(first_name);
        await Sl.attr(data.selector_attr, data.elements.last_name).setValue(last_name);
        await browser.pause(1000);
        await Sl.attr(data.selector_attr, data.elements.email).setValue(email);
        await Sl.attr(data.selector_attr, data.elements.password).setValue(password);
    }

    //---------------------------------------------------------

    async firstNameLabelText(data,assert)
    {
        await expect(Sl.$(data.elements.first_name_label_text)).toHaveTextContaining(assert)
    }

    //---------------------------------------------------------

    async firstNamePlaceholderText(data,assert)
    {
        await expect(Sl.attr(data.selector_attr, data.elements.first_name)).toHaveAttributeContaining(data.selector_attr,assert)
    }

    //---------------------------------------------------------

    async formHeading(data,assert)
    {
        await expect(Sl.$(data.elements.page_heading)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async lastNameLabelText(data,assert)
    {
        await expect(Sl.$(data.elements.last_name_label_text)).toHaveTextContaining(assert)
    }

    //---------------------------------------------------------

    async lastNamePlaceholderText(data,assert)
    {
        await expect(Sl.attr(data.selector_attr, data.elements.last_name)).toHaveAttributeContaining(data.selector_attr,assert)
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

    async passwordLabelText(data,assert)
    {
        await expect(Sl.$(data.elements.password_label_text)).toHaveTextContaining(assert)
    }

    //---------------------------------------------------------

    async passwordPlaceholderText(data,assert)
    {
        await expect(Sl.attr(data.selector_attr, data.elements.password)).toHaveAttributeContaining(data.selector_attr,assert)
    }

    //---------------------------------------------------------

    async passwordValueAssert(password,data,assert)
    {
        const passwordTextField = await Sl.attr(data.selector_attr, data.elements.password)
        passwordTextField.setValue(password)
        await expect(passwordTextField).toHaveAttributeContaining(data.attribute_name,assert)
    }

    //---------------------------------------------------------

    async signUpAndAssertBox(first_name,last_name,email,password,data,assert,assert_signup)
    {
        await this.fillAndSignUp(first_name,last_name,email,password,data)
        await expect(Sl.role(data.elements.alert_box)).toHaveTextContaining(assert);
        await this.formHeading(data,assert_signup);
    }

    //---------------------------------------------------------

    async signUpAndAssertMsg(first_name,last_name,email,password,data,assert,assert_signup)
    {
        await this.fillAndSignUp(first_name,last_name,email,password,data)
        await expect(Sl.$(data.elements.alert_msg)).toHaveTextContaining(assert);
        await this.formHeading(data,assert_signup);
    }

    //--------------------------------------------------------

    async signUpButtonText(data,assert)
    {
        await expect(Sl.$(data.elements.signUp)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

    async signUpWithBlankTextfields(data,assert,assert_signup)
    {
        await this.clickSignUp(data)
        await browser.pause(2000);
        await expect(Sl.$(data.elements.alert_msg)).toHaveTextContaining(assert);
        await this.formHeading(data,assert_signup);
    }

    //---------------------------------------------------------

    async signUpWithValidData(first_name,last_name,email,password,data,assert)
    {
        await this.fillAndSignUp(first_name,last_name,email,password,data)
        await expect(Sl.$(data.elements.page_heading)).toHaveTextContaining(assert);
    }

    //---------------------------------------------------------

}
module.exports = new SignupPage();
//----------------------------------------------------------------------------------------------------------------------