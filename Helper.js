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

    async waitForClickable(element, timeout = 2000){
        await element.waitForClickable({ timeout: timeout });
    }

    async waitForUnClickable(element, timeout = 2000){
        await element.waitForClickable({ reverse: true, timeout: timeout });
    }
}