export default class Helper{

    async checkBaseUrlResponse(base_url){                   // Method to check wether the base_url reponse is 200 or not
        const response = await fetch(base_url);
        expect(response.status).toBe(200);
    }

    async waitForDisplayed(element, millisecond = 1000){
        try {
            await element.waitForDisplayed({ timeout: millisecond })
        } catch (error) {
            throw `Timeout: Element '${element.selector}' was not displayed after ${millisecond}ms. Original error: ${error.message}`
        }
    }

    async waitForAbsent(element, millisecond = 2000){
        await element.waitForDisplayed({ reverse: true, timeout: millisecond});
    }

    async scrollIntoView(element){
        await element.scrollIntoView({ block: 'center', inline: 'center' });
    }

    async scroll(x, y){                                     // Here the parameters 'x' & 'y' denotes the horizontal & vertical scroll values
        await browser.scroll(x, y);
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

    async elementScreenshot(element, filename){
        await element.saveScreenshot(filename);
    }

    async browserScreenshot(filename){
        await browser.saveScreenshot(filename);
    }

    async switchFrame(iframe){                                  // Here the parameter 'iframe' is a valid selector for the iframe element
        try {
            await browser.switchToFrame(iframe);
        } catch (error) {
            throw `Failed to switch to the specified iframe (selector: '${iframe}'). Original error: ${error.message}`
        }
    }

    async switchWindow(handle){                                 // Here the parameter 'handle' can be a URL handle or page title
        try {
            await browser.switchToWindow(handle);
        } catch (error) {
            throw `Failed to switch to the specified window (handle: '${handle}'). Original error: ${error.message}`
        }
    }
}