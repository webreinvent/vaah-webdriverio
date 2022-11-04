const Page = require('../pageobjects/signin.page')
const Data = require('../data/signin')

describe('Example test', async () => {
    it('should open correct app', async () => {
        await Page.open()
        await expect(browser).toHaveTitle('VaahCMS v1.7.17')
    })
})
