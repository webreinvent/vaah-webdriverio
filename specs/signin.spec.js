const Page = require('../pageobjects/signin.page')
const Data = require('../data/signin')
const Sl = require("./../Selector");
const assert = require("./../Assert");
const selector_type = 'dusk';

let params = Data.params;

params.group = Data.groups[0];

describe('Signin', async () => {

    params.test = Data.groups[0].tests[0];

    console.log(params);

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndAssert(
            params.test.email,
            params.test.password,
            Data,
            params.test.assert
        );
       await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[1];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndAssert(
            params.test.email,
            params.test.password,
            Data,
            params.test.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[2];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndAssert(
            params.test.email,
            params.test.password,
            Data,
            params.test.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[3];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndLogout(
            params.test.email,
            params.test.password,
            Data,
            params.test.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[4];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.assertion(
            params.test.assert
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[5];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.forgotPassword(
            params.test.assert
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[6];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.fillAndRemoveEmail(
            params.test.email,
            params.test.password,
            Data
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[7];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.fillAndRemovePassword(
            params.test.password,
            Data
        )
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[8];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndAssert(
            params.test.email,
            params.test.password,
            Data,
            params.test.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[9];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndAssert(
            params.test.email,
            params.test.password,
            Data,
            params.test.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[10];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndAssert(
            params.test.email,
            params.test.password,
            Data,
            params.test.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[11];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndAssert(
            params.test.email,
            params.test.password,
            Data,
            params.test.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[12];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.submitAndAssert(
            params.test.email,
            params.test.password,
            Data,
            params.test.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[13];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.eyeButton(
            params.test.password,
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
            params.test.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[15];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.signInAndBrowseBack(
            params.test.email,
            params.test.password,
            Data,
            params.test.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------
    params.test = Data.groups[0].tests[16];

    it(Page.testId(params), async () => {
        await Page.open()
        await Page.signOutAndBrowseBack(
            params.test.email,
            params.test.password,
            Data,
            params.test.assert
        );
        await Page.refresh();
    })

    //------------------------------------------------------------------------------------------------------------------

})
