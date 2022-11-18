# vaah-webdriverio
Helpful classes to reduce code &amp; accelerate speed for writing test cases for WebDriver.IO 

## Objectives
- Reduce code for `selecting` elements and verifying `asserts`
- Code `re-usability` by writing the test scripts independent of the `data` and `POM(Page Object Model)`.
- Generate unique `page id`, `group id` and `test case id`
- Run `test cases` based on `page id`, `group id` or `test id`
- Generate a well `formated` report

## Setup
##### Step 1: Clone or add as this repo as submodule to root of `webdriverio` tests folder with folder name `vaah-webdriverio`
Demo: https://img-v3.getdemo.dev/screenshot/spjG338m6A.mp4


##### Step 2: Configure `wdio.env.sample.js`
- Rename `wdio.env.sample.js` to `wdio.env.js`
- Move `wdio.env.js` to the `root` folder of your project or where `wdio.conf.js` exist

Demo: https://img-v3.getdemo.dev/screenshot/HwjLwZEoOk.mp4


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
Demo: https://img-v3.getdemo.dev/screenshot/eNboGGqmrh.mp4


In `env.js` tester should set the base URL based on their test environment. // Make sure that the URL ends with '/'.
````js
case 'localhost':
        params.base_url = null // Instead of null insert your base URL inside " ".
        break;
````
Demo: https://img-v3.getdemo.dev/screenshot/BiI0D6ygq3.mp4



##### Step 4: Extend `pageobjects` and variables in `constructor`
Extend all your `pageobjects` to `const Page = require('./../Page');`, 

Example: `pageobjects/signup.page.js`: 
```js
const Page = require('./../Page');
const Sl = require('./../Selector');
class SignupPage extends Page {

    constructor() {
        super();
        this.params.page.id = "SU";
        this.params.page.name = "Sign-Up";
        this.params.page.url = this.signup_url;
    }
    
    open (url=null) {
        if(url)
        {
            this.page.url = url
        }
        return super.open(this.page.url);
    }

    async signUpAndAssertMsg(first_name,last_name,email,password,data,assert,assert_signup)
    {
        await this.fillAndSignUp(first_name,last_name,email,password,data)
        await expect(Sl.$(data.elements.alert_msg)).toHaveTextContaining(assert);
        await this.formHeading(data,assert_signup);
    }

    async signUpWithValidData(first_name,last_name,email,password,data,assert)
    {
        await this.fillAndSignUp(first_name,last_name,email,password,data)
        await expect(Sl.$(data.elements.page_heading)).toHaveTextContaining(assert);
    }
    ...
}
module.exports = new SignupPage();
```
Demo: https://img-v4.getdemo.dev/screenshot/phpstorm64_EZkTiTFfTr.mp4

#### step 5: All the values which are required for the `signup.page.js` and `signup.spec.js` should be present in `./test/wdio/vaah-webdriverio/data/signup.js`and for the values which are required for the test scripts, it should be arranged in `groups` and `tests` in JSON format.
Example:
```js
class Signup{

    constructor() {
        this.selector_attr = 'placeholder';

        this.params = {
            group:{
                count: null,
                name: null,
            }
        }

        this.elements = {
            first_name: 'First Name',
            last_name: 'Last Name',
            email: 'Work email address',
            password: 'Password',
        }

        this.params.page = {
            id: "SU",
            name: "Sign Up",
            url: '/'
        }
        this.groups = [
            {
                count: 1,
                name:"Validation",
                tests: [
                    {
                        count: 1.1,
                        name: "Verify user is able to signup by leaving first name text-field blank",
                        expect: "User should not be able to signup and an error message should be displayed",
                        first_name: "",
                        last_name : "Test",
                        email : "demotest@gmail.com",
                        password: "testing123",
                        assert: {
                            error_msg: "Please fill out this field.",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },
                    ...
                ]
            }
        ]
    }
}
module.exports = new Signup();

```` 

Demo : https://img-v4.getdemo.dev/screenshot/phpstorm64_vRYLZTovEt.mp4

#### Note: All the methods present in Assert class under Assets in vaah-webdriverio should be prefixed with "async" to run the methods in async mode in the test scripts.
Example:
```js
const env = require('./../../../wdio.env');

class Assert{

    async pause()
    {
        if(env.is_human)
        {
            browser.pause(env.is_human_pause*1000);
        }
    }

    async pageTitle(text)
    {
        return expect(browser).toHaveTitleContaining(text);

    }

    async text(selector, text) {
        await expect(selector).toHaveTextContaining(text);
        await this.pause();
    }
    
};

module.exports = new Assert()
```` 

##### Step 6: Writing test cases
In `specs` folder create a file `signup.spec.js` and write following code for example:
```js
const Page = require('../pageobjects/signup.page')
const Data = require('../data/signup')
const color  = require("cli-color");

let params = Data.params;
let inputs;

params.group = Data.groups[0];

describe(Page.groupId(params), async () => {

    params.test = Data.groups[0].tests[0];
    console.log(color.red('params.test'), params.test);

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[0];
        await Page.open()
        await Page.signUpAndAssertMsg(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
    })
    ...
})

````   
Demo: https://img-v4.getdemo.dev/screenshot/phpstorm64_OIdm0CHdjo.mp4

#### Note: This is just an example of where to write the test script. The test scripts may differ.


| Selector | In Selector.js|Use|Description|
|--|--|--|--|
|testid|`testid(name,value=null) { let el = this.attr('data-testid', name); if(value) { el.setValue(value) } return el; }`|`sl.testid("royal_email", "demo@test.com")`|This will select the element having attribute `data-testid='royal_email'` and then will insert the value as "demo@test.com" in it.|
|id|`id(id)  {  return $("#"+id);  } `|`sl.id("submit").click;`|This will select the element with attribute id='submit' and will click on it.|
|class|`class(name) { return $("."+name); }`|`sl.class("submit").click;`|This will select the element with attribute `id='submit'` and will click on it.
|$|`$(selector){return $(selector);}`|`sl.$("h1");`|This will select the element having attribute as `h1`. Mostly used during assertion.|
|attr|`attr(attribute, value){return$('['+attribute+'="'+value+'"]'); }`|`sl.attr('href','#/forgot-password' ).click();`|This will select the element having attribute as `href` and its value as `#/forgot-password`.
|name|`name(name,value=null) { let el = this.attr('name', name); if(value) { el.setValue(value) } return el; }`|`sl.name("username", "tomsmith");`|This will select the element with attribute `name="username"` and will insert value "tomsmith" in it.|
|wdio|`wdio(name,value=null) { let el = this.attr('data-wdio', name); if(value) { el.setValue(value) } return el; }`|`sl.wdio("username", "tomsmith")`|This will select the element having attribute `data-wdio='username'` and then will insert the value as "tomsmith" in it. Note: If you are not able to find data-wdio attribute associated with the element in that case either you can add it by yourself or you can ask the developer to add this attribute.|
|dusk|`dusk(name,value=null) { let el = this.attr('dusk', name); if(value) { el.setValue(value) } return el; }`|`sl.dusk("username", "tomsmith")`|This will select the element having attribute `dusk='username'` and then will insert the value as "tomsmith" in it.|
|role|`role(name) { return this.attr('role', name); }`|`sl.role("navigation").click()`|This will select the element having attribute `role="navigation"` and will click on it.|

#### Note: If there is a common `selector_name` and `selector_type` which is being used multiple times, so we can create a `dynamic selector` for that.
Example: https://img-v4.getdemo.dev/screenshot/phpstorm64_e5bxZaDxd9.mp4

Page object model will help you to store the element's attribute value at one place so that if there is a change in the value then we have to change it at one page rather then changing it at every instance.

To implement page object we need to to create a file to store these values. Inside the tests folder go to wdio folder and then go inside data folder (if the folder does not exist you can create one). Then inside the data folder create a javascript file elements.js(signup.js) and paste the below mentioned code.

Demo: https://img-v3.getdemo.dev/screenshot/37DZHpTEcH.mp4

Note: Due to limitations this section is not showing in tabular format. Please copy and paste the section in https://stackedit.io/ to view the tabular form.


When using the above pageobject then you can write the selectors in the following manner:


| Selector | In Selector.js | Use with pageobject |
|--|--|--|
|testid|`testid(name,value=null) { let el = this.attr('data-testid', name); if(value) { el.setValue(value) } return el; }`|`sl.testid("royal_email", "demo@test.com");` or `sl.testid("royal_email").setValue("demo@test.com")`|
|id|`id(id) { return $("#"+id); }`|`sl.id(elements.login.button_signin).click();`|
|class|`class(name) { return $("."+name); }`|`sl.class(elements.login.button_signin).click();`|
|$|`$(selector){return $(selector);}`|`expect(sl.$(elements.login.remember_me_checkbox)).toBeSelected();`|
|attr|`attr(attribute, value){return$('['+attribute+'="'+value+'"]'); }`|`sl.attr("class", elements.login.button_signin).click();`
|name|`name(name,value=null) { let el = this.attr('name', name); if(value) { el.setValue(value) } return el; }`|`sl.name(elements.login.signin_email, "tomsmith");` or `sl.name(elements.login.signin_email).setValue("tomsmith");`|
|wdio|`wdio(name,value=null) { let el = this.attr('data-wdio', name); if(value) { el.setValue(value) } return el; }`|`sl.wdio(elements.login.signin_email, "tomsmith");` or `sl.wdio(elements.login.signin_email).setValue("tomsmith")`|
|dusk|`dusk(name,value=null) { let el = this.attr('dusk', name); if(value) { el.setValue(value) } return el; }`|`sl.dusk(elements.login.signin_password, "SuperSecretPassword")` or `sl.dusk(elements.login.signin_password).setValue("SuperSecretPassword");`|
|role|`role(name) { return this.attr('role', name); }`|`sl.role(elements.login.button_signin).click();`|


Demo: https://img-v3.getdemo.dev/screenshot/F0Q3bDNA9K.mp4
 ```
Note:

1.For selector 'testid', if attribute or locator "data-testid" is present in the html code when we are inspecting or locating an element then we should give the first priority to the locator or attribute 'data-testid'.
   e.g. sl.testid("royal_email", "demo@test.com");

2.Due to limitations this section is not showing in tabular format. Please copy and paste the section in https://stackedit.io/ to view the tabular form.
```
Demo(1): https://img-v4.getdemo.dev/screenshot/chrome_revNZwwQcK.mp4

I have written an example on how to write a test script for validation of SignUp using the data and page objects:

 ```js
const Page = require('../pageobjects/signup.page')
const Data = require('../data/signup')
const color  = require("cli-color");

let params = Data.params;
let inputs;

params.group = Data.groups[0];

describe(Page.groupId(params), async () => {

    params.test = Data.groups[0].tests[0];
    console.log(color.red('params.test'), params.test);

    it(Page.testId(params), async () => {

        inputs = Data.groups[0].tests[0];
        await Page.open()
        await Page.signUpAndAssertMsg(
            inputs.first_name,
            inputs.last_name,
            inputs.email,
            inputs.password,
            Data,
            inputs.assert.error_msg,
            inputs.assert.sign_up_page_heading
        );
    })
})
```

Demo: https://img-v4.getdemo.dev/screenshot/phpstorm64_LmPxlmbR8G.mp4


#### Note: The test_count_id should be unique so that there will be no conflict between the test scripts.

Demo: https://img-v4.getdemo.dev/screenshot/phpstorm64_f0fQLyAbL9.mp4

##### Step 7: Run test 
Now, you can run the test via:
```sh
npx wdio --spec ./test/wdio/vaah-webdriverio/specs/signup.spec.js
```
Demo: https://img-v4.getdemo.dev/screenshot/phpstorm64_2uUgncax8D.mp4


or run all tests via:

```shell
npx wdio run ./wdio.conf.js
```
Demo: https://img-v4.getdemo.dev/screenshot/phpstorm64_lbKJIy41Zz.mp4

##### Step 8: Result

<img src="https://img-v4.getdemo.dev/screenshot/M0naCi7mJY.png" width="70%" style="max-width: 100%;">

It contains:
```
[PAGE ID: SU]
[GROUP ID: SU_1]
[TEST ID: SU_1_1.1]
```
Demo: https://img-v4.getdemo.dev/screenshot/phpstorm64_yHgMeEiX8f.mp4

If you need to run tests based on `page id`, `group id` or `test id`, you can use following command:

```shell
npx wdio --mochaOpts.grep <page id> 
e.g. npx wdio --mochaOpts.grep SU // This will run all the test cases under the Page with Page ID SU
Demo:https://img-v4.getdemo.dev/screenshot/phpstorm64_MsNMIkuXuD.mp4

npx wdio --mochaOpts.grep <group id>
e.g. npx wdio --mochaOpts.grep SU_1 // This will run all the test cases under the Group with Group ID SU_1
Demo:https://img-v4.getdemo.dev/screenshot/phpstorm64_6RI0zswh1w.mp4

npx wdio --mochaOpts.grep <test id>
e.g. npx wdio --mochaOpts.grep SU_1_1.1 // This will run all the test cases under the Page ID SU having Group ID 1 and Test ID starting with 1.1
Demo:https://img-v4.getdemo.dev/screenshot/phpstorm64_wyve3JMFzO.mp4
// Note: If you have test case with test ID as SU_1_11, SU_1_12... SU_1_19, these tests will also run if you provide the test ID as SU_1_1
// To avoid this situation you can use a keyword to run a single test, but make sure to keep the keyword unique otherwise all the test cases having that keyword will run while executing tests. 
```
or you can even run the test cases based on a specific keyword:
```npx wdio --mochaOpts.grep <any keyword>
e.g. npx wdio --mochaOpts.grep smoke
Demo: https://img-v3.getdemo.dev/screenshot/vju9IYLTiO.mp4
```
##### Possible error
 ```
@wdio/runner: Error: Failed to create session.
session not created: This version of ChromeDriver only supports Chrome version 96
```
If this error occurrs that means your `wdio-chromedriver-service` and `chromedriver` dependencies are outdated and those need to be updated.
Easiest way to update the dependency is provided in the demo.

Demo: https://img-v3.getdemo.dev/screenshot/xL5B0R3Gar.mp4

  
 
<br/>

## Support us

Please consider starring the project to show your :heart: and support.

[WebReinvent](https://webreinvent.com) is a web agency based in Delhi, India. You'll find an overview of all our open source projects [on github](https://github.com/webreinvent).
