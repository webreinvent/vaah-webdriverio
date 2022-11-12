class Signup{

    constructor() {
        this.selector_type = 'placeholder';
        //this.attribute_name = ''

        this.params = {
            group:{
                count: null,
                name: null,
            }
        }

        this.selectors = {
            first_name: 'First Name',
            last_name: 'Last Name',
            email: 'Work email address',
            password: 'Password',
            signUp: 'span=Sign Up',
            alert_msg: 'p',
            page_heading: 'h3',
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
                        name: "Verify heading of the Sign Up form.",
                        expect: "Heading of the sign up form should be present.",
                        assert : "Sign up to your account"
                    },
                    {
                        count: 1.2,
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
                    {
                        count: 1.3,
                        name: "Verify user is able to signup by leaving last name text-field blank",
                        expect: "User should not be able to signup and an error message should be displayed",
                        first_name: "Demo",
                        last_name : "",
                        email : "demotest@gmail.com",
                        password: "testing123",
                        assert: {
                            error_msg: "Please fill out this field.",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },
                    {
                        count: 1.4,
                        name: "Verify user is able to signup by leaving email text-field blank",
                        expect: "User should not be able to signup and an error message should be displayed",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "",
                        password: "testing123",
                        assert: {
                            error_msg: "Please fill out this field.",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },
                    {
                        count: 1.5,
                        name: "Verify user is able to signup by leaving password text-field blank",
                        expect: "User should not be able to signup and an error message should be displayed",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demotest@gmail.com",
                        password: "",
                        assert: {
                            error_msg: "Please fill out this field.",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },
                    {
                        count: 1.6,
                        name: "Verify that the placeholder text is present in first name text-field",
                        expect: "Placeholder text should be present in the first name text-field.",
                        assert: "First Name"
                    },
                    {
                        count: 1.7,
                        name: "Verify that the placeholder text is present in last name text-field",
                        expect: "Placeholder text should be present in the last name text-field.",
                        assert: "Last Name"
                    },
                    {
                        count: 1.8,
                        name: "Verify that the placeholder text is present in email text-field",
                        expect: "Placeholder text should be present in the email text field.",
                        assert: "Work email address"
                    },
                    {
                        count: 1.9,
                        name: "Verify that the placeholder text is present in password text-field",
                        expect: "Placeholder text should be present in the password text field.",
                        assert: "Password"
                    },
                    {
                        count: 2.1,
                        name: "Verify user is able to signup by filling all the mandatory fields",
                        expect: "User should be able to signup for the application successfully and signin page should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demotest12345@gmail.com",
                        password: "testing123",
                        assert: "Sign in to your account"
                    },
                    {
                        count: 2.2,
                        name: "Verify user is able to signup by leaving all the mandatory fields blank",
                        expect: "User should not be able to signup and an error message should be displayed",
                        assert: {
                            error_msg: "Please fill out this field.",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },
                    {
                        count: 2.3,
                        name: "Verify user is able to signup using alphabetic characters in first name text-field",
                        expect: "User should be able to signup for the application successfully and signin page should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demote24@gmail.com",
                        password: "testing123",
                        assert: "Sign in to your account"
                    },

                    ]
            }
            ]
    }

}

module.exports = new Signup();