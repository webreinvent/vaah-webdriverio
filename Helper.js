export default class Helper{

    async checkBaseUrlResponse(base_url){
        const response = await fetch(base_url);
        expect(response.status).toBe(200);
    }

    async waitForDisplayed(element, millisecond = 1000){
        try {
            await element.waitForDisplayed({ timeout: millisecond })
        } catch (error) {
            throw 'element not found'
        }
    }

    async waitForAbsent(element, millisecond = 2000){
        await element.waitForDisplayed({ reverse: true, timeout: millisecond});
    }

    async scrollIntoView(element){
        await element.scrollIntoView({ block: 'center', inline: 'center' });
    }

    async waitForClickable(element, millisecond = 2000){
        await element.waitForClickable({ timeout: millisecond });
    }

    async waitForEnabled(element, millisecond = 2000){
        await element.waitForEnabled({ timeout: millisecond });
    }

    async waitForDisabled(element, millisecond = 2000){
        await element.waitForEnabled({ reverse: true, timeout: millisecond })
    }

    async waitForExist(element, millisecond = 2000){
        await element.waitForExist({ timeout: millisecond });
    }

    async saveScreenshot(element, filename){
        await element.saveScreenshot(filename);
    }

    async switchFrame(iframe){                                  // Here the parameter 'iframe' is a valid selector for the iframe element
        try {
            await browser.switchToFrame(iframe);
        } catch (error) {
            throw 'Cannot switch frame, frame not found'
        }
    }

    async switchWindow(handle){                                 // Here the parameter 'handle' can be the URL handle or page title
        try {
            await browser.switchToWindow(handle);
        } catch (error) {
            throw 'Cannot switch window, added window not found'
        }
    }
}