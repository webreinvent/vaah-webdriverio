class Signin{



    constructor() {
        this.selector_type = 'dusk';
        this.params = {
            group:{
                count: null,
                name: null,
            }
        }
        this.selectors = {
            email: 'signin-email_or_username',
            password: 'signin-password',
            submit: 'signin-signin'
        }
        this.params.page = {
            id: "SL",
            name: "Sign In",
            path: "/solutions",
            url: '/'
        }

        this.groups = [
            {
                count: 0,
                name:"Validation",
                tests: [
                    {
                        count: 0,
                        name: "Invalid Credentials",
                        expect: "User should not be able to signin and an error message should be displayed",
                        title: "Validate with invalid credentials",
                        email: "sanu@gmail.com",
                        password: "12345",
                        assert: "No user exist"
                    },
                    {
                        count: 1,
                        name: "Invalid email and Valid Password",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "sanu@gmail.com",
                        password: "admin@vaahcms",
                        assert: "No user exist"
                    },
                    {
                        count: 2,
                        name: "Valid email and Invalid Password",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "we@webreinvent.com",
                        password: "123456",
                        assert: "Invalid credentials"
                    },
                    {
                        count: 3,
                        name: "Valid Credentials",
                        expect: "User should be able to signin and signout from the application successfully.",
                        email: "we@webreinvent.com",
                        password: "admin@vaahcms",
                        assert: ["Welcome to Vaah" , "cms"]
                    },
                    {
                        count: 4,
                        name: "Verfiy Heading of the SignIn Page",
                        expect: "Heading of the signin page should be correct",
                        assert: "Sign In"
                    },
                    {
                        count: 5,
                        name: "Verify forgot password link functionality",
                        expect: "User should be able to click on forgot password link and forgot password page should be displayed",
                        assert: "Forgot Password?"
                    },
                    {
                        count: 6,
                        name: "Verify user is able to remove text from email textfield",
                        expect: "User should be able to remove text from email textfield",
                        email: "we@webreinvent.com",
                    },
                    {
                        count: 7,
                        name: "Verify user is able to remove text from email textfield",
                        expect: "User should be able to remove text from email textfield",
                        password: "admin@vaahcms"
                    },
                    {
                        count: 8,
                        name: "Verify user is able to signin using alphabetic characters in emailtextfield",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "satyajeetsinghsanu",
                        password: "12345",
                        assert: "No user exist"
                    },
                    {
                        count: 9,
                        name: "Verify user is able to signin using numeric characters in emailtextfield",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "123456789",
                        password: "12345",
                        assert: "No user exist"
                    },
                    {
                        count: 10,
                        name: "Verify user is able to signin with blank emailtextfield",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "",
                        password: "admin@vaahcms",
                        assert: "The email or username field is required."
                    },
                    {
                        count: 11,
                        name: "Verify user is able to signin with blank passwordtextfield",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "we@webreinvent.com",
                        password: "",
                        assert: "Invalid credentials"
                    },
                    {
                        count: 12,
                        name: "Verify user is able to signin with both email and password textfields blank",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "",
                        password: "",
                        assert: "The email or username field is required."
                    },
                    {
                        count: 13,
                        name: "Verify by clicking on the eye icon password should be shown for Password text-field",
                        expect: "Password should be shown when user click on the eye icon.",
                        email: "",
                        password: "1323456",
                    },
                    {
                        count: 14,
                        name: "Verify that the labelled text present in Submit button is properly displayed",
                        expect: "Labelled text should be properly displayed.",
                        assert: "Sign In"
                    },
                    {
                        count: 15,
                        name: "Verify logging into the application and browsing back",
                        expect: " User should not get logged out.",
                        email: "we@webreinvent.com",
                        password: "admin@vaahcms",
                        assert: ["Welcome to Vaah" , "cms"]

                    },
                    {
                        count: 16,
                        name: "Verify logging out from the application and browsing back ",
                        expect: " User should not get logged in again..",
                        email: "we@webreinvent.com",
                        password: "admin@vaahcms",
                        assert: "Sign In"

                    },
                ]
            }
            ]

        /*this.tests = {
            group:{
                count: 1,
                name: "Validation",
                tests: {
                    "1.1": {
                        count: 1.1,
                        name: "Invalid Credentials",
                        expect: "Invalid Credentials",
                        title: "Validate with invalid credentials",
                        username: "asf",
                        password: "",
                        assert: "The email or username field is required."
                    }
                }
            },

        }*/

    }

}

module.exports = new Signin();