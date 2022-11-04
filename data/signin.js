class Signin{


    constructor() {

        this.testids = {
            button: "submit"
        };

        this.asserts = {
            button: "submit"
        };

        this.selector_type = 'dusk';

        this.selectors = {
            emailtextfield: "signin-email_or_username",
            passtextfield: "signin-password",
            submit: "signin-signin"
        };

        this.alert_message = {
            invalid_alert_message: "vaahcms-user.no_user_exist"
        }


    }


}

module.exports = new Signin();