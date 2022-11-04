const page = require('../pageobjects/signin.page')

/*describe('Example test', async () => {
    it('should open correct app', async () => {
        page.open()
        browser.maximizeWindow();

        await sl.dusk("signin-email_or_username").click();

       await browser.pause(3000);

        //sl.testid(data.testids.button);


        //await expect(browser).toHaveTitle("SANU")
    })
});*/


let params = page.params;

params.group.count = 1;
params.group.name = 'Sign-In';

describe(page.groupId(params), async() => {

    //----------------------------------------------------------------------------------------

    /*params.test = {
        count: 1.1,
        name: "Verify user is able to click on the textfields(email & password)",
        expect: "user should be able to click",
    };
    it(page.testId(params), async () => {
        await page.open();
        browser.maximizeWindow();
        await sl.dusk(data.dusk.emailtextfield).click();
        await browser.pause(3000);
        await sl.dusk(data.dusk.passtextfield).click();
        await browser.pause(3000);
    });*/

//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

    params.test = {
        count: 1.2,
        name: "Verify sign-in into the application using invalid credentials",
        expect: "User should not be able to logged in and an error message should be displayed.",
    };
    it(page.testId(params), async () => {
        await page.open();
        await browser.maximizeWindow();

        //await page.invalidLogin(data.selectors.emailtextfield, data.selectors.passtextfield)

        /*await sl.dusk(data.dusk.emailtextfield).setValue(email);
        await sl.dusk(data.dusk.passtextfield).setValue(password);
        await sl.dusk(data.dusk.submit).click();
        await expect(sl.role("alertdialog")).toHaveTextContaining(data.alert_message.invalid_alert_message);*/

    });


})