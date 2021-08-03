const env = require('./../../../wdio.env');

class Assert{

    pause()
    {
        if(env.is_human)
        {
            browser.pause(env.is_human_pause*1000);
        }
    }

    pageTitle(text)
    {
        return expect(browser).toHaveTitleContaining(text);

    }

    text(selector, text)
    {
        expect(selector).toHaveTextContaining(text);
        this.pause();
    }


};

module.exports = new Assert()