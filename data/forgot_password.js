class Fpassword{

    constructor() {
        this.attr_type = 'placeholder';
        this.mailtrap_path = 'https://mailtrap.io/signin';
        this.params = {
            group:{
                count: null,
                name: null,
            }
        }

        this.elements = {
            forgot_password: '=Forgot Password?',
            email: 'forgot-email',
            send_code_button: 'forgot-send_code',
            alert_box: 'alertdialog',
            page_heading: 'h3',
            page_subheading: 'p',
            mail_email: 'user_email',
            mail_next_button: '=Next',
            mail_password: 'user_password',
            mail_login_button: 'commit',
            mail_recent_email: '=Reset Password Email',
            mail_senders_email: 'span=Speaker <invite@speaker.com>',
            mail_receiver_email: 'span=<satyajeet.s001@webreinvent.com>'
        }

        this.params.page = {
            id: "FP",
            name: "Forgot Password",
            url: '/'
        }

        this.groups = [
            {
                count: 1,
                name:"Functionality",
                tests: [
                    {
                        count: 1.1,
                        name: "Verify that the forgot password link is clickable and is redirected to the forgot password page.",
                        expect: "User should be able to click on forgot password link and forgot password page should be displayed.",
                        assert: "Forgot Password?"
                    },
                    {
                        count: 1.2,
                        name: "Verify heading of the forgot password page.",
                        expect: "Heading of the forgot password page should be present.",
                        assert: "Forgot Password?"
                    },
                    {
                        count: 1.3,
                        name: "Verify sub-heading of the forgot password page.",
                        expect: "Sub-heading of the forgot password page should be present.",
                        assert: "You can recover your password from here."
                    },
                    {
                        count: 1.4,
                        name: "Verify that the placeholder text is present in 'enter email' text-field of the forgot password page",
                        expect: "Placeholder text should be present in the 'enter email' text field of the forgot password page",
                        assert: "Enter Email"
                    },
                    {
                        count: 1.5,
                        name: "Verify that the label text present in 'send code' button of the forgot password page.",
                        expect: "Label text should be present in 'send code' button of the forgot password page.",
                        assert: "Send code"
                    },
                    {
                        count: 1.6,
                        name: "Verify that the forgot password functionality when the user enters the unregistered email id and clicks on the send code button.",
                        expect: "user should not get the code or link and and an error message should be displayed.",
                        email: "demo@gmail.com",
                        assert: "No user exist"
                    },
                    {
                        count: 1.7,
                        name: "Verify the forgot password functionality by trying to reset the password without entering the email address .",
                        expect: "User should not be able to reset the new password and an error message should be displayed.",
                        email: "",
                        assert: "The email field is required."
                    },
                    {
                        count: 1.8,
                        name: "Verify the forgot password functionality by trying to reset the password by entering only space in email text-field",
                        expect: "User should not be able to reset the new password and an error message should be displayed.",
                        email: " ",
                        assert: "The email field is required."
                    },
                    {
                        count: 1.9,
                        name: "Verify the user will get the reset password email from valid sender email",
                        expect: " User should get the reset password email from valid sender.",
                        email: "satyajeet.s001@webreinvent.com",
                        mail_email: "dev@webreinvent.com",
                        mail_password: "b$6hEHExKH955bP",
                        assert: "Speaker <invite@speaker.com>"
                    },
                    {
                        count: 2.1,
                        name: "Verify the user will get the reset password email to valid receiver or valid email",
                        expect: " User should get the reset password email to valid email.",
                        email: "satyajeet.s001@webreinvent.com",
                        mail_email: "dev@webreinvent.com",
                        mail_password: "b$6hEHExKH955bP",
                        assert: "<satyajeet.s001@webreinvent.com>"
                    },
                    {
                        count: 2.2,
                        name: "Verify the user will get the ",
                        expect: " User should get ther.",
                        email: "satyajeet.s001@webreinvent.com",
                        mail_email: "dev@webreinvent.com",
                        mail_password: "b$6hEHExKH955bP",
                        assert: "Click to Reset"
                    },
                ]
            }
        ]
    }

}

module.exports = new Fpassword();