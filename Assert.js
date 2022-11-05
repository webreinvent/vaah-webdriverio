const env = require('./../../../wdio.env');

class Assert{

    async pause()
    {
        if(env.is_human)
        {
            await browser.pause(env.is_human_pause*1000);
        }
    }

    async refresh()
    {
        await browser.refresh();
        await browser.pause(2000);
    }

    async pageTitle(text)
    {
        return expect(browser).toHaveTitleContaining(text);

    }

    async text(selector, text)
    {
        return expect(selector).toHaveTextContaining(text);
    }


};

module.exports = new Assert()
