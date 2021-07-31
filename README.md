# vaah-webdriverio
Helpful classes to reduce code &amp; accelerate speed for writing test cases for WebDriver.io 

## Objectives
- Reduce code for `selecting` elements and verifying `asserts`
- Generate unique `page id`, `group id` and `test case id`
- Run `test cases` based on `page id`, `group id` or `test id`
- Generate a well `formated` report

## Setup
##### Step 1: Clone or add as this repo as submodule to root of `webdriverio` tests folder with folder name `vaah-webdriverio`

##### Step 2: Configure `wdio.env.sample.js`
- Rename `wdio.env.sample.js` to `wdio.env.js`
- Move `wdio.env.js` to the `root` folder of your project or where `wdio.conf.js` exist

##### Step 3: Include `wdio.env.js`
In `wdio.conf.js`, include `wdio.env.js` and update following variables:

```js
const env = require('./wdio.env');

exports.config = {
    ...
    env: env,
    baseUrl: env.base_url,
    ...
}

```

##### Step 4: Extend `pageobjects` and variables in `constructor`
Extend all your `pageobjects` to `const Page = require('./../vaah-webdriverio/Page');`, 

Example: `pageobjects/home.page.js`: 
```js
const Page = require('./../vaah-webdriverio/Page');

class Login extends Page {

    constructor() {
        super();
        this.page.id = "LI"; // Page ID
        this.page.name = "Login";
        this.page.path = "login";
        this.page.url = this.base_url + this.page.path;
    }

    open (url=null) {
        if(url)
        {
            this.page.url = url
        }
        return super.open(this.page.url);
    }
    
}
module.exports = new Login();
```

##### Step 5: Writing test cases
In `specs` folder create a file `login.e2e.js` and following code for example:
```js
const sl = require('../vaah-webdriverio/Selector');
const assert = require('../vaah-webdriverio/Assert');
const login = require('../pageobjects/login.page');

login.group.count = 1; // Group counter which will be used to generate Group ID
login.group.name = 'Login';

describe(login.groupId(), () => {
    //-----------------------------------------------------------
    login.test = {
        count: 1, // Test counter which will be used to generate Test ID
        name: 'Select by Dusk attribute',
        expect: "Alert message 'You logged into a secure area!' should appear",
        data: "You logged into a secure area!",
    }

    it(login.testId(), () => {
        login.open();
        assert.pageTitle("The Internet");
        sl.name("username", "tomsmith");
        sl.name("password", "SuperSecretPassword!");
        sl.class('radius').click();
        assert.text(sl.id('flash'), login.test.data);
    });
    //-----------------------------------------------------------
    
});
```

##### Step 6: Run test 
Now, you can run the test via:
```sh
npx wdio --spec ./tests/wdio/specs/login.e2e.js
```

or run all tests via:

```shell
npx wdio run ./wdio.conf.js
```

##### Step 7: Result

<img src="https://raw.githubusercontent.com/webreinvent/vaah-webdriverio/master/assets/img/result.png" width="70%" />

It contains:
```
[PAGE ID: LI]
[GROUP ID: LI_1]
[TEST ID: LI_1_1]
```

If you need to run tests based on `page id`, `group id` or `test id`, you can use following command:

```shell
npx wdio --mochaOpts.grep <page id>
npx wdio --mochaOpts.grep <group id>
npx wdio --mochaOpts.grep <test id>
```

<br/>

## Support us

Please consider starring the project to show your :heart: and support.

[WebReinvent](https://webreinvent.com) is a web agency based in Delhi, India. You'll find an overview of all our open source projects [on github](https://github.com/webreinvent).
