const Page = require('../pageobjects/signup.page')
const Data = require('../data/signup')
const color  = require("cli-color");

let params = Data.params;
let inputs;

params.group = Data.groups[0];

describe(Page.groupId(params), async () => {

    params.test = Data.groups[0].tests[0];
    console.log(color.red('params.test'), params.test);

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[0];
        await Page.open()
        await Page.formHeading(
            Data,
            inputs.assert
        )
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[1];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[1];
        await Page.open()
        await Page.signUpAndAssertMsg(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[2];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[2];
        await Page.open()
        await Page.signUpAndAssertMsg(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[3];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[3];
        await Page.open()
        await Page.signUpAndAssertMsg(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[4];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[4];
        await Page.open()
        await Page.signUpAndAssertMsg(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[5];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[5];
        await Page.open()
        await Page.firstNamePlaceholderText(
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[6];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[6];
        await Page.open()
        await Page.lastNamePlaceholderText(
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[7];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[7];
        await Page.open()
        await Page.emailPlaceholderText(
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[8];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[8];
        await Page.open()
        await Page.passwordPlaceholderText(
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[9];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[9];
        await Page.open()
        await Page.signUpWithValidData(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[10];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[10];
        await Page.open()
        await Page.signUpWithBlankTextfields(
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[11];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[11];
        await Page.open()
        await Page.signUpWithValidData(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[12];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[12];
        await Page.open()
        await Page.signUpAndAssertBox(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[13];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[13];
        await Page.open()
        await Page.firstNameLabelText(
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[14];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[14];
        await Page.open()
        await Page.fillAndRemoveFirstName(
            inputs.first_name,
            Data,
            inputs.assert.text_value,
            inputs.assert.blank_value
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[15];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[15];
        await Page.open()
        await Page.signUpWithValidData(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[16];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[16];
        await Page.open()
        await Page.signUpAndAssertBox(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[17];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[17];
        await Page.open()
        await Page.lastNameLabelText(
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[18];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[18];
        await Page.open()
        await Page.fillAndRemoveLastName(
            inputs.last_name,
            Data,
            inputs.assert.text_value,
            inputs.assert.blank_value
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[19];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[19];
        await Page.open()
        await Page.emailLabelText(
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[20];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[20];
        await Page.open()
        await Page.signUpAndAssertMsg(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[21];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[21];
        await Page.open()
        await Page.signUpWithValidData(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[22];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[22];
        await Page.open()
        await Page.signUpWithValidData(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[23];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[23];
        await Page.open()
        await Page.signUpAndAssertMsg(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
    })

})