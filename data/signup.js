class Signup{

    constructor() {
        this.selector_type = 'placeholder';

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
                        password: "testing",
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
                        password: "testing",
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
                        password: "testing",
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
                    ]
            }
            ]
    }

}

module.exports = new Signup();