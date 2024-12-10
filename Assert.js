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

    pageUrl(text)
    {
        return expect(browser).toHaveUrl(text);
    }

    pageTitle(text)
    {
        return expect(browser).toHaveTitleContaining(text);
    }

    text(selector, text)
    {
        return expect(selector).toHaveTextContaining(text);
    }

    isDisplayed(selector)
    {
        return expect(selector).toBeDisplayed();
    }

    isClickable(selector)
    {
        return expect(selector).toBeClickable();
    }

    hasAttributeValue(selector, attribute, value){
        return expect(selector).toHaveAttribute(attribute, expect.stringContaining(value));
    }
};