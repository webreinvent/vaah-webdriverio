const chalk = require('chalk');
const env = require('./../../../wdio.env');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {

    constructor() {
        this.base_url = env.base_url;
        this.page = {
            id: null,
            name: null,
            path: null,
            url: null,
        };

        this.group = {
            count: null,
            title: null,
        };

        this.test = {
            count: null,
            title: null,
            data: null,
            expect: null,
        };



    }

    //-------------------------------------------------
    open (url) {
        return browser.url(url);
    }
    //-------------------------------------------------
    highlight(str)
    {
        return chalk.bgYellowBright.black(str);
    }
    //-------------------------------------------------
    pageId()
    {

        return `
[PAGE ID: ${this.highlight(this.page.id)}] Page: `+this.page.name+` URL: `+this.page.url;
    }
    //-------------------------------------------------
    groupId()
    {
        let id = chalk.red(`
---------------------------------------------------------------`);
        id += this.pageId();
        id += ` 
[GROUP ID: `+this.highlight(this.page.id+"_"+this.group.count)+"] "+this.group.name;

        return id;
    }
    //-------------------------------------------------
    testId()
    {
        let id = `[TEST ID: `+this.highlight(this.page.id+"_"+this.group.count+"_"+this.test.count)+"] "+this.test.name;
        if(this.test.expect)
        {
            id += `
    ${chalk.blue('Expect:')} ${this.test.expect}`;
        }


        return id;
    }
    //-------------------------------------------------
    //-------------------------------------------------
}
