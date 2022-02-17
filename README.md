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
In `env.js` tester should set the base URL based on their test environment. // Make sure that the URL ends with '/'.
````js
case 'localhost':
        params.base_url = null // Instead of null insert your base URL inside " ".
        break;
````

##### Step 4: Extend `pageobjects` and variables in `constructor`
Extend all your `pageobjects` to `const Page = require('./../vaah-webdriverio/Page');`, 

Example: `pageobjects/Login.page.js`: 
```js
const Page = require('./../vaah-webdriverio/Page');

class Login extends Page {

    constructor() {
        super();
        this.page.id = "LI"; // Page ID, Please keep this unique for all the pages.
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
        name: 'Tester should be ble to run login test successfully',
        expect: "Alert message 'You logged into a secure area!' should appear",
        data: "You logged into a secure area!",
    }

    it(login.testId(), () => {
        login.open();
        assert.pageTitle("The Internet");
        sl.name("username", "tomsmith"); // This will select the element with attribute as name='username' and will also insert the value "tomsmith".
        sl.name("password", "SuperSecretPassword!");
        sl.class('radius').click();
        assert.text(sl.id('flash'), login.test.data);
    });
    //-----------------------------------------------------------
 
});
````   

```markdown
| Selector | In Selector.js|Use|Description|
|--|--|--|--|
|  id|`id(id)  {  return $("#"+id);  } `|`sl.id("submit").click;`|This will select the element with attribute id='submit' and will click on it.|
|class|`class(name) { return $("."+name); }`|`sl.class("submit").click;`|This will select the element with attribute `id='submit'` and will click on it.
|$|`$(selector){return $(selector);}`|`sl.$("h1");`|This will select the element having attribute as `h1`. Mostly used during assertion.|
|attr|`attr(attribute, value){return$('['+attribute+'="'+value+'"]'); }`|`sl.attr('href','#/forgot-password' ).click();`|This will select the element having attribute as `href` and its value as `#/forgot-password`.
|name|`name(name,value=null) { let el = this.attr('name', name); if(value) { el.setValue(value) } return el; }`|`sl.name("username", "tomsmith");`|This will select the element with attribute `name="username"` and will insert value "tomsmith" in it.|
|wdio|`wdio(name,value=null) { let el = this.attr('data-wdio', name); if(value) { el.setValue(value) } return el; }`|`sl.wdio("username", "tomsmith")`|This will select the element having attribute `data-wdio='username'` and then will inser the value as "tomsmith" in it. Note: If you are not able to find data-wdio attribute associated with the element in that case either you can add it by yourself or you can ask the developer to add this attribute.|
|dusk|`dusk(name,value=null) { let el = this.attr('dusk', name); if(value) { el.setValue(value) } return el; }`|`sl.dusk("username", "tomsmith")`|This will select the element having attribute `dusk='username'` and then will inser the value as "tomsmith" in it.|
|role|`role(name) { return this.attr('role', name); }`|`sl.role("navigation").click()`|This will select the element having attribute `role="navigation"` and will click on it.|
```
Page object model will help you to store the element's attribute value at one place so that if there is a change in the value then we have to change it at one page rather then changing it at every instance.
To implement page object we need to to create a file to store these values. Inside the tests folder go to wdio folder and then go inside data folder (if the folder does not exist you can create one). Then inside the data folder create a javascript file elements.js and paste the below mentioned code.

```js


 class Elements {  
  constructor() {  
    this.login= {
signin_email: "signin-email_or_username",  
signin_password: "signin-password",
button_signin: "signin-signin",
 remember_me_checkbox: "checkbox",
 }}}
module.exports = new Elements();
```
`this.login={}` block contains all the attributes values used in for the login value. If you are testing any other page you can create a seperate block and add the attributes used in that block. An example is mentioned below: 
 
 ```js
 class Elements {  
  constructor() {  
    this.login= {
signin_email: "signin-email_or_username",  
signin_password: "signin-password",
button_signin: "signin-signin",
 remember_me_checkbox: "checkbox",
 }
this.home={
main_heading:"h1",
sub_heading:"h2",
}
}}
module.exports = new Elements();
```
When using the above pageobject then you can write the selectors in the following manner:

```markdown
|Selector|In Selector.js|Use with pageobject|
|--|--|--|--|
|id|`id(id) { return $("#"+id); }`|`sl.id(elements.login.button_signin).click();`|
|class|`class(name) { return $("."+name); }`|`sl.class(elements.login.button_signin).click();`|
|$|`$(selector){return $(selector);}`|`expect(sl.$(elements.login.remember_me_checkbox)).toBeSelected();`|
|attr|`attr(attribute, value){return$('['+attribute+'="'+value+'"]'); }`|`sl.attr("class", elements.login.button_signin).click();`
|name|`name(name,value=null) { let el = this.attr('name', name); if(value) { el.setValue(value) } return el; }`|`sl.name(elements.login.signin_email, "tomsmith");` or `sl.name(elements.login.signin_email).setValue("tomsmith");`|
|wdio|`wdio(name,value=null) { let el = this.attr('data-wdio', name); if(value) { el.setValue(value) } return el; }`|`sl.wdio(elements.login.signin_email, "tomsmith");` or `sl.wdio(elements.login.signin_email).setValue("tomsmith")`|
|dusk|`dusk(name,value=null) { let el = this.attr('dusk', name); if(value) { el.setValue(value) } return el; }`|`sl.dusk(elements.login.signin_password, "SuperSecretPassword")` or `sl.dusk(elements.login.signin_password).setValue("SuperSecretPassword");`|
|role|`role(name) { return this.attr('role', name); }`|`sl.role(elements.login.button_signin).click();`|
```

I have written an example on how to write a test script for logging in using the page object:

 ```js
const sl = require('../vaah-webdriverio/Selector');const assert = require('../vaah-webdriverio/Assert');const login = require('../pageobjects/login.page');  
const elements = require('../data/elements');
login.group.count = 1; // Group counter which will be used to generate Group IDlogin.group.name = 'Login';  
describe(login.groupId(), () => {  
 //-----------------------------------------------------------  login.test = {  count: 1, // Test counter which will be used to generate Test ID  
  name: 'Tester should be ble to run login test successfully',  
  expect: "Alert message 'You logged into a secure area!' should appear",  
  data: "You logged into a secure area!",  
 }  
 it(login.testId(), () => {  
  login.open();  
  assert.pageTitle("The Internet");  
  sl.wdio(elements.login.signin_email, "tomsmith"); // This will select the element with attribute as `data-wdio='signin-email_or_username'` which is stored in the elements.js as `signin_email` and will also insert the value "tomsmith".  
  sl.dusk(elements.login.signin_password, "SuperSecretPassword"); 
  sl.class(elements.login.button_signin).click();  
  assert.text(sl.id('flash'), login.test.data);  
 }); //-----------------------------------------------------------  });
```

> Written with [StackEdit](https://stackedit.io/).
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
e.g. npx wdio --mochaOpts.grep LI // This will run all the test cases under the Page with Page ID LI_1

npx wdio --mochaOpts.grep <group id>
e.g. npx wdio --mochaOpts.grep LI_1 // This will run all the test cases under the Group with Group ID LI_1

npx wdio --mochaOpts.grep <test id>
e.g. npx wdio --mochaOpts.grep LI_1_1 // This will run all the test cases under the Page ID LI having Group ID 1 and Test ID starting with 1
// Note: If you have test case with test ID as LI_1_11, LI_1_12... LI_1_19, these tests will also run if you provide the test ID as LI_1_1.
// To avoid this situation you can use a keyword to run a single test, but make sure to keep the keyword unique otherwise all the test cases having that keyword will run while executing tests. 
```
or you can even run the test cases based on a specific keyword:
```npx wdio --mochaOpts.grep <keyword>
e.g. npx wdio --mochaOpts.grep smoke
```

<br/>

## Support us

Please consider starring the project to show your :heart: and support.

[WebReinvent](https://webreinvent.com) is a web agency based in Delhi, India. You'll find an overview of all our open source projects [on github](https://github.com/webreinvent).
