const Page = require('../pageobjects/signin.page')
const Data = require('../data/signin')
const selector_type = 'dusk';

describe('Signin', async () => {
    it('Invalid Login', async () => {
        await Page.open()
        await Page.submitAndAssert(
            'test@gmzail.com',
            'password',
            Data,
            "vaahcms-user.no_user_exist"
        );
        browser.refresh();
    })

    it('Valid Email And Empty Password Validation', async () => {
        await Page.open()
        await Page.submitAndAssert(
            'we@webreinvent.com',
            '',
            Data,
            "Invalid credentials"
        );
        browser.refresh();
        await browser.pause(3000);
    })

    it('Validate with empty Email text-field', async () => {
        await Page.open()
        await Page.submitAndAssert(
            '',
            'webreinvent',
            Data,
            "vaahcms-login.email_or_username_required"
        );
    })


})
