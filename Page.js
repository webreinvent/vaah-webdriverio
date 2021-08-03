const chalk = require('chalk');
const env = require('./../../../wdio.env');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {

    constructor() {
        this.base_url = env.base_url;
        this.params = {
            page: {
                id: null,
                name: null,
                path: null,
                url: null,
            },
            group: {
                count: null,
                name: null,
            },
            test: {
                count: null,
                name: null,
                data: null,
                expect: null,
            }
        };




    }

    //-------------------------------------------------
    open (url) {
        return browser.url(url);
    }
    //-------------------------------------------------
    highlight(str)
    {
        return chalk.magenta(str);
    }
    //-------------------------------------------------
    pageId(params)
    {

        return `
[PAGE ID: ${this.highlight(this.params.page.id)}] Page: `+this.params.page.name+` URL: `+this.params.page.url;
    }
    //-------------------------------------------------
    groupId(params)
    {
        let id = chalk.red(`
---------------------------------------------------------------`);
        id += this.pageId(params);
        id += `
[GROUP ID: `+this.highlight(this.params.page.id+"_"+this.params.group.count)+"] "+this.params.group.name;

        return id;
    }
    //-------------------------------------------------
    testId(params)
    {
        let id = `[TEST ID: `+this.highlight(params.page.id+"_"+params.group.count+"_"+params.test.count)+"] "+params.test.name;
        if(params.test.expect)
        {
            id += `
    ${chalk.blue('Expect:')} ${params.test.expect}`;
        }


        return id;
    }
    //-------------------------------------------------
    //-------------------------------------------------
}
