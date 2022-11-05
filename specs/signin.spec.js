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
            params.email,
            params.password,
            Data,
            params.test.assert
        );
        //browser.refresh();
        //await browser.pause(3000);
       await assert.refresh();
    })

})
