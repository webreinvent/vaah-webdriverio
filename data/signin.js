class Signin{



    constructor() {

        this.selector_type = 'data-testid';
        this.selectors = {
            email: 'signin-email_or_username',
            password: 'signin-password',
            submit: 'signin-signin'
        }

    }

}

module.exports = new Signin();