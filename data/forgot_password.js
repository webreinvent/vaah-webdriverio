class Fpassword{

    constructor() {
        this.attr_type = 'placeholder';
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
                    /*{
                        count: 1.6,
                        name: "Verify that the forgot password functionality when the user enters the unregistered email id and clicks on the send code button.",
                        expect: "user should not get the code or link and and an error message should be displayed.",
                        assert: "No user exist"
                    }*/
                ]
            }
        ]
    }

}

module.exports = new Fpassword();