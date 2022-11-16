class Signup{

    constructor() {
        this.selector_type = 'placeholder';
        this.attribute_name= 'type'

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
            alert_box: 'alertdialog',
            page_heading: 'h3',
            first_name_label_text: 'label=First Name',
            last_name_label_text: 'label=Last Name',
            email_label_text: 'label=Email',
            password_label_text: 'label=Password'
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

                    {
                        count: 1.2,
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
                        count: 1.3,
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
                        count: 1.4,
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
                        count: 1.5,
                        name: "Verify user is able to signup by filling all the mandatory fields",
                        expect: "User should be able to signup for the application successfully and signin page should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demotest"+Math.random()*100+"@gmail.com",
                        password: "testing123",
                        assert: "Sign in to your account"
                    },

                    {
                        count: 1.6,
                        name: "Verify user is able to signup by leaving all the mandatory fields blank",
                        expect: "User should not be able to signup and an error message should be displayed",
                        assert: {
                            error_msg: "Please fill out this field.",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },

                    {
                        count: 1.7,
                        name: "Verify user is able to signup by entering alphabetic characters in first name text-field",
                        expect: "User should be able to signup for the application successfully and signin page should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demotes"+Math.random()*100+"@gmail.com",
                        password: "testing123",
                        assert: "Sign in to your account"
                    },

                    {
                        count: 1.8,
                        name: "Verify user is able to signup by entering only space in first name text-field",
                        expect: "User should not be able to signup for the application and an error message should be displayed.",
                        first_name: " ",
                        last_name : "Test",
                        email : "demotes"+Math.random()*100+"@gmail.com",
                        password: "testing123",
                        assert: {
                            error_msg: "First name field is required",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },

                    {
                        count: 1.9,
                        name: "Verify user is able to signup by entering alphabetic characters in last name text-field",
                        expect: "User should be able to signup for the application successfully and signin page should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demotes"+Math.random()*100+"@gmail.com",
                        password: "testing123",
                        assert: "Sign in to your account"
                    },

                    {
                        count: 2.1,
                        name: "Verify user is able to signup by entering only space in last name text-field",
                        expect: "User should not be able to signup for the application and an error message should be displayed.",
                        first_name: "Demo",
                        last_name : " ",
                        email : "demotes"+Math.random()*100+"@gmail.com",
                        password: "testing123",
                        assert: {
                            error_msg: "Last name field is required",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },

                    {
                        count: 2.2,
                        name: "Verify user is able to signup by entering only space in email text-field",
                        expect: "User should not be able to signup for the application and an error message should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : " ",
                        password: "testing123",
                        assert: {
                            error_msg: "Please fill out this field.",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },

                    {
                        count: 2.3,
                        name: "Verify user is able to signup by entering valid email in email text-field",
                        expect: "User should be able to signup for the application successfully and signin page should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demotes"+Math.random()*100+"@gmail.com",
                        password: "testing123",
                        assert: "Sign in to your account"
                    },
                    {
                        count: 2.4,
                        name: "Verify if the email field accepts '+' sign in the email address.",
                        expect: "User should be able to signup for the application successfully and signin page should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demo+1tes"+Math.random()*100+"@gmail.com",
                        password: "testing123",
                        assert: "Sign in to your account"
                    },
                    {
                        count: 2.5,
                        name: "Verify the email id field With the missing '@' sign and domain in the email address",
                        expect: "User should not be able to signup for the application and an error message should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demotest",
                        password: "testing123",
                        assert: {
                            error_msg: "Please include an '@' in the email address.",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },

                    {
                        count: 2.6,
                        name: "Verify the email id field With the missing domain after '@' symbol in the email address",
                        expect: "User should not be able to signup for the application and an error message should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demotest@",
                        password: "testing123",
                        assert: {
                            error_msg: "Please enter a part following '@'.",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },

                    {
                        count: 2.7,
                        name: "Verify the email id field With Two @ sign",
                        expect: "User should not be able to signup for the application and an error message should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demotest@@gmail.com",
                        password: "testing123",
                        assert: {
                            error_msg: "A part following '@' should not contain the symbol '@'.",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },

                    {
                        count: 2.8,
                        name: "Verify leading dot in the email id text box is invalid.",
                        expect: "User should not be able to signup for the application and an error message should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : ".demotest@gmail.com",
                        password: "testing123",
                        assert: {
                            error_msg: "Email field is incorrect",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },

                    {
                        count: 2.9,
                        name: "Verify trailing dot in the email id text box is invalid.",
                        expect: "User should not be able to signup for the application and an error message should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demotest@gmail.com.",
                        password: "testing123",
                        assert: {
                            error_msg: "'.' is used at a wrong position in 'gmail.com.'.",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },

                    {
                        count: 3.1,
                        name: "Verify multiple dots in the email field.",
                        expect: "User should not be able to signup for the application and an error message should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demo..test@gmail.com",
                        password: "testing123",
                        assert: {
                            error_msg: "Email field is incorrect",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },

                    {
                        count: 3.2,
                        name: "Verify the email id field With the missing username in the email address",
                        expect: "User should not be able to signup for the application and an error message should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "@gmail.com",
                        password: "testing123",
                        assert: {
                            error_msg: "Please enter a part followed by '@'.",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },

                    {
                        count: 3.3,
                        name: "Verify user is able to signup by entering only space in password text-field",
                        expect: "User should not be able to signup for the application and an error message should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "sanu"+Math.random()*100+"@gmail.com",
                        password: " ",
                        assert: {
                            error_msg: "Password field is required",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },

                    {
                        count: 3.4,
                        name: "Verify user is able to signup by entering more than 8 characters in password text-field",
                        expect: "User should be able to signup for the application successfully and signin page should be displayed.",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demotes"+Math.random()*100+"@gmail.com",
                        password: "testing123",
                        assert: "Sign in to your account"
                    },

                    {
                        count: 3.5,
                        name: "Verify user is able to signup by entering less than 8 characters in password text-field",
                        expect: "User should not be able to signup for the application and an error message should be displayed",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "demotes"+Math.random()*100+"@gmail.com",
                        password: "test",
                        assert: {
                            error_msg: "Password should have minimum 8 characters in length.",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    }
                ]
            },
            {
                count: 2,
                name: "UI",
                tests: [
                    {
                        count: 1.1,
                        name: "Verify heading of the Sign Up form.",
                        expect: "Heading of the sign up form should be present.",
                        assert : "Sign up to your account"
                    },

                    {
                        count: 1.2,
                        name: "Verify that the placeholder text is present in first name text-field",
                        expect: "Placeholder text should be present in the first name text-field.",
                        assert: "First Name"
                    },

                    {
                        count: 1.3,
                        name: "Verify that the placeholder text is present in last name text-field",
                        expect: "Placeholder text should be present in the last name text-field.",
                        assert: "Last Name"
                    },

                    {
                        count: 1.4,
                        name: "Verify that the placeholder text is present in email text-field",
                        expect: "Placeholder text should be present in the email text field.",
                        assert: "Work email address"
                    },

                    {
                        count: 1.5,
                        name: "Verify that the placeholder text is present in password text-field",
                        expect: "Placeholder text should be present in the password text field.",
                        assert: "Password"
                    },

                    {
                        count: 1.6,
                        name: "Verify that the label text 'First Name' is present above the first name text-field",
                        expect: "Label text 'First Name' should be present above the first name text-field",
                        assert: "First Name"
                    },

                    {
                        count: 1.7,
                        name: "Verify that the label text 'Last Name' is present above the last name text-field",
                        expect: "Label text 'Last Name' should be present above the last name text-field",
                        assert: "Last Name"
                    },

                    {
                        count: 1.8,
                        name: "Verify that the label text 'Email' is present above the email text-field",
                        expect: "Label text 'Email' should be present above the email text-field",
                        assert: "Email"
                    },

                    {
                        count: 1.9,
                        name: "Verify that the label text 'Password' is present above the password text-field",
                        expect: "Label text 'Password' should be present above the last name text-field",
                        assert: "Password"
                    },

                    {
                        count: 2.1,
                        name: "Verify that the label text present in Sign Up button.",
                        expect: "Label text should be present in Sign Up button.",
                        assert: "Sign Up"
                    }
                ]
            },
            {
                count: 3,
                name: "Functionality",
                tests: [
                    {
                        count: 1.1,
                        name: "Verify user is able to remove text from the first name text-field",
                        expect: "User should be able to remove text from the first name text-field",
                        first_name: "Demo",
                        assert: {
                            text_value: "Demo",
                            blank_value: ""
                        }
                    },

                    {
                        count: 1.2,
                        name: "Verify user is able to remove text from the last name text-field",
                        expect: "User should be able to remove text from the last name text-field",
                        last_name: "Test",
                        assert: {
                            text_value: "Test",
                            blank_value: ""
                        }
                    },

                    {
                        count: 1.3,
                        name: "Verify user is able to remove password characters from the password text-field",
                        expect: "User should be able to remove password characters from the password text-field",
                        password: "testing123",
                        assert: {
                            text_value: "testing123",
                            blank_value: ""
                        }
                    },

                    {
                        count: 1.4,
                        name: "Verify the password entered in password text-field is in encrypted form.",
                        expect: "The password entered in password text-field should be in encrypted form. ",
                        password: "testing123",
                        assert: "password"
                    }
                ]
            },
            {
                count: 4,
                name: "Failed",
                tests: [
                    {
                        count: 1.1,
                        name: "Verify the email id text-field With the Missing top-level domain (.com/.net/.org/etc)",
                        expect: "User should not be able to signup for the application",
                        first_name: "Demo",
                        last_name : "Test",
                        email : "sanu"+Math.random()*100+"@gmail",
                        password: "testing123",
                        assert: "Sign up to your account"
                    }
                ]
            }
            ]
    }

}

module.exports = new Signup();