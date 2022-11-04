const Page = require('../pageobjects/sample.page')

describe('Example test', () => {
    it('should open correct app', () => {
        Page.open()
        expect(browser).toHaveTitle('vaah-webdriverio-testscripts')
    })
})
