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
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[1];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[1];
        await Page.open()
        await Page.signUpAndAssert(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[2];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[2];
        await Page.open()
        await Page.signUpAndAssert(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[3];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[3];
        await Page.open()
        await Page.signUpAndAssert(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[4];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[4];
        await Page.open()
        await Page.signUpAndAssert(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------

})