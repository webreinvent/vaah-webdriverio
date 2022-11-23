const Page = require('../pageobjects/forgot_password.page')
const Data = require('../data/forgot_password')
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
        await Page.pageHeading(
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[1];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[1];
        await Page.open()
        await Page.pageHeading(
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[2];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[2];
        await Page.open()
        await Page.pageSubheading(
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[3];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[3];
        await Page.open()
        await Page.emailPlaceholderText(
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[4];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[4];
        await Page.open()
        await Page.sendCodeButtonText(
            Data,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[5];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[5];
        await Page.open()
        await Page.invalidEmailAssertion(
            Data,
            inputs.email,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[6];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[6];
        await Page.open()
        await Page.invalidEmailAssertion(
            Data,
            inputs.email,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[7];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[7];
        await Page.open()
        await Page.invalidEmailAssertion(
            Data,
            inputs.email,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[8];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[8];
        await Page.open()
        await Page.emailSenderAssertion(
            Data,
            inputs.email,
            inputs.mail_email,
            inputs.mail_password,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[9];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[9];
        await Page.open()
        await Page.emailReceiverAssertion(
            Data,
            inputs.email,
            inputs.mail_email,
            inputs.mail_password,
            inputs.assert
        );
    })

    //------------------------------------------------------------------------------------------------------------------

    params.test = Data.groups[0].tests[10];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[10];
        await Page.open()
        await Page.resetLinkClick(
            Data,
            inputs.email,
            inputs.mail_email,
            inputs.mail_password,
            //inputs.assert
        );
    })



    //------------------------------------------------------------------------------------------------------------------
})

