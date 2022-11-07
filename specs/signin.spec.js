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
        await Page.open()
        await Page.submitAndAssert(
            params.group.tests[2].email,
            params.group.tests[2].password,
            Data,
            params.group.tests[2].assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[3];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndLogout(
            params.group.tests[3].email,
            params.group.tests[3].password,
            Data,
            params.group.tests[3].assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[4];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.h3_assertion(
            params.group.tests[4].assert
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[5];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.forgotPassword(
            params.group.tests[5].assert
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[6];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.fillAndRemoveEmail(
            params.group.tests[6].email,
            Data
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[7];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.fillAndRemovePassword(
            params.group.tests[7].password,
            Data
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[8];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndAssert(
            params.group.tests[8].email,
            params.group.tests[8].password,
            Data,
            params.group.tests[8].assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[9];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndAssert(
            params.group.tests[9].email,
            params.group.tests[9].password,
            Data,
            params.group.tests[9].assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[10];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndAssert(
            params.group.tests[10].email,
            params.group.tests[10].password,
            Data,
            params.group.tests[10].assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[11];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndAssert(
            params.group.tests[11].email,
            params.group.tests[11].password,
            Data,
            params.group.tests[11].assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[12];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndAssert(
            params.group.tests[12].email,
            params.group.tests[12].password,
            Data,
            params.group.tests[12].assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[13];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.eyeButton(
            params.group.tests[13].password,
            Data,
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[14];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitFunctionality(
            Data,
            params.group.tests[14].assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[15];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.signInAndBrowseBack(
            params.group.tests[15].email,
            params.group.tests[15].password,
            Data,
            params.group.tests[15].assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[16];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.signOutAndBrowseBack(
            params.group.tests[16].email,
            params.group.tests[16].password,
            Data,
            params.group.tests[16].assert
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
