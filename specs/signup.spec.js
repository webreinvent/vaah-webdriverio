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
        await Page.pageHeading(
            Data,
            inputs.assert
        )
        await Page.refresh();
    })
})