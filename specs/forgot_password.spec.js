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
        console.log(color.green('params.test'), inputs);
        await Page.open()
        await Page.forgotPassword(
            Data,
            inputs.assert
        );
    })
    //------------------------------------------------------------------------------------------------------------------
})

