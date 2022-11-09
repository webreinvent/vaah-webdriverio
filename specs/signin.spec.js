const Page = require('../pageobjects/signin.page')
const Data = require('../data/signin')
const color  = require("cli-color");

let params = Data.params;
let inputs;

params.group = Data.groups[0];

describe(Page.groupId(params), async () => {

    params.test = Data.groups[0].tests[0];
    console.log(color.red('params.test'), params.test);

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[0];
        console.log(color.green('params.test'), inputs);
        await Page.open()
        await Page.submitAndAssert(
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
            /*Data.groups[0].tests[0].email,
            params.group.tests[0].password,
            Data,
            params.group.tests[0].assert*/
        );
       await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[1];

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[1];
        console.log(color.green('params.test'), inputs);
        await Page.open()
        await Page.submitAndAssert(
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[2];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[2];
        await Page.open()
        await Page.submitAndAssert(
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[3];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[3];
        await Page.open()
        await Page.submitAndLogout(
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[4];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[4];
        await Page.open()
        await Page.h3_assertion(
            inputs.assert
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[5];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[5];
        await Page.open()
        await Page.forgotPassword(
            inputs.assert
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[6];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[6];
        await Page.open()
        await Page.fillAndRemoveEmail(
            inputs.email,
            Data
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[7];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[7];
        await Page.open()
        await Page.fillAndRemovePassword(
            inputs.password,
            Data
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[8];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[8];
        await Page.open()
        await Page.submitAndAssert(
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[9];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[9];
        await Page.open()
        await Page.submitAndAssert(
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[10];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[10];
        await Page.open()
        await Page.submitAndAssert(
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[11];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[11];
        await Page.open()
        await Page.submitAndAssert(
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[12];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[12];
        await Page.open()
        await Page.submitAndAssert(
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[13];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[13];
        await Page.open()
        await Page.eyeButton(
            inputs.password,
            Data,
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[14];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[14];
        await Page.open()
        await Page.submitFunctionality(
            Data,
            inputs.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[15];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[15];
        await Page.open()
        await Page.signInAndBrowseBack(
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[16];

    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[16];
        await Page.open()
        await Page.signOutAndBrowseBack(
            inputs.email,
            inputs.password,
            Data,
            inputs.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------

    /*params.test = Data.groups[0].tests[17];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.signOutAndBrowseBack(
            params.group.tests[16].email,
            params.group.tests[16].password,
            Data,
            params.group.tests[16].assert
        );
        await Page.refresh();
    })*/

    //------------------------------------------------------------------------------------------------------------------

})
