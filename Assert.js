import env from '../../../wdio.env.js'
const envObj = new env();
const params = envObj.getParams();

export default class Asserts{

    async pauseIfHuman(seconds = params.is_human_pause)
    {
        if(params.is_human) {
            await browser.pause(seconds);
        }
    }

    async pageUrl(text)
    {
        return expect(browser).toHaveUrl(text);
    }

    async pageTitle(text)
    {
        return expect(browser).toHaveTitle(expect.stringContaining(text));
    }

    async text(selector, text)
    {
        return expect(selector).toHaveText(expect.stringContaining(text));
    }

    async isDisplayed(selector)
    {
        return expect(selector).toBeDisplayed();
    }

    async isClickable(selector)
    {
        return expect(selector).toBeClickable();
    }

    async hasAttributeValue(selector, attribute, value)
    {
        return expect(selector).toHaveAttribute(attribute, expect.stringContaining(value));
    }
};