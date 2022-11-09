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
            submit: 'signin-signin',
            h3: 'h3',
            h2: 'h2',
            p: 'p',
            alert_box: 'alertdialog',
            menu_item: 'menuitem',
            logout_button: '=Logout',
            eye_icon: 'eye',
            forgot_password: '=Forgot Password?',
            copyright: '=VaahCMS'
        }
        this.params.page = {
            id: "SL",
            name: "Sign In",
            path: "/solutions",
            url: '/'
        }

        this.groups = [
            {
                count: 1,
                name:"Validation",
                tests: [
                    {
                        count: 1.1,
                        name: "Invalid Credentials",
                        expect: "User should not be able to signin and an error message should be displayed",
                        title: "Validate with invalid credentials",
                        email: "sanu@gmail.com",
                        password: "12345",
                        assert: {
                            error_msg: "No user exist",
                            signInPageTitle: "Sign In",
                        }
                    },
                    {
                        count: 1.2,
                        name: "Invalid email and Valid Password",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "satyajeet@gmail.com",
                        password: "admin@vaahcms",
                        assert: {
                            error_msg: "No user exist",
                            signInPageTitle: "Sign In",
                        }
                    },
                    {
                        count: 1.3,
                        name: "Valid email and Invalid Password",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "we@webreinvent.com",
                        password: "123456",
                        assert: {
                            error_msg: "Invalid credentials",
                            signInPageTitle: "Sign In"
                        }
                    },
                    {
                        count: 1.4,
                        name: "Valid Credentials",
                        expect: "User should be able to signin and signout from the application successfully.",
                        email: "we@webreinvent.com",
                        password: "admin@vaahcms",
                        assert: {
                            homePageTitle: ["Welcome to Vaah" , "cms"],
                            signInPageTitle: "Sign In"
                        }
                    },
                    {
                        count: 1.5,
                        name: "Verify user is able to signin using alphabetic characters in emailtextfield",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "satyajeetsinghsanu",
                        password: "12345",
                        assert: {
                            error_msg: "No user exist",
                            signInPageTitle: "Sign In"
                        }
                    },
                    {
                        count: 1.6,
                        name: "Verify user is able to signin using numeric characters in emailtextfield",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "123456789",
                        password: "12345",
                        assert: {
                            error_msg: "No user exist",
                            signInPageTitle: "Sign In"
                        }
                    },
                    {
                        count: 1.7,
                        name: "Verify user is able to signin with blank emailtextfield",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "",
                        password: "admin@vaahcms",
                        assert: {
                            error_msg: "The email or username field is required.",
                            signInPageTitle: "Sign In"
                        }
                    },
                    {
                        count: 1.8,
                        name: "Verify user is able to signin with blank passwordtextfield",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "we@webreinvent.com",
                        password: "",
                        assert: {
                            error_msg: "Invalid credentials",
                            signInPageTitle: "Sign In"
                        }
                    },
                    {
                        count: 1.9,
                        name: "Verify user is able to signin with both email and password textfields blank",
                        expect: "User should not be able to signin and an error message should be displayed",
                        email: "",
                        password: "",
                        assert: {
                            error_msg: "The email or username field is required.",
                            signInPageTitle: "Sign In"
                        }
                    },
                    {
                        count: 2.1,
                        name: "Verify logging into the application and browsing back",
                        expect: " User should not get logged out.",
                        email: "we@webreinvent.com",
                        password: "admin@vaahcms",
                        assert: {
                            homePageTitle: ["Welcome to Vaah", "cms"],
                            signInPageTitle: "Sign In"
                        }

                    },
                    {
                        count: 2.2,
                        name: "Verify logging out from the application and browsing back ",
                        expect: " User should not get logged in again..",
                        email: "we@webreinvent.com",
                        password: "admin@vaahcms",
                        assert: {
                            homePageTitle: ["Welcome to Vaah", "cms"],
                            signInPageTitle: "Sign In",
                        }
                    },
                        ]
            },
            {
                count: 2,
                name: "UI",
                tests: [
                    {
                        count: 1.1,
                        name: "Verfiy Heading of the SignIn Page",
                        expect: "Heading of the signin page should be correct",
                        assert: "Sign In"
                    },
                    {
                        count: 1.2,
                        name: "Verfiy Sub-Heading of the SignIn Page",
                        expect: "Sub-Heading of the signin page should be correct",
                        assert: "Please Sign In to continue"
                    },
                    {
                        count: 1.3,
                        name: "Verify linksin footer section",
                        expect: "Links should be present under the footer section. of the signIn page.",
                        assert: "VaahCMS"
                    }

                ]
            },
            {
                count: 3,
                name: "functionality",
                tests: [
                    {
                        count: 1.1,
                        name: "Verify forgot password link functionality",
                        expect: "User should be able to click on forgot password link and forgot password page should be displayed",
                        assert: "Forgot Password?"
                    },
                    {
                        count: 1.2,
                        name: "Verify user is able to remove text from email textfield",
                        expect: "User should be able to remove text from email textfield",
                        email: "we@webreinvent.com",
                    },
                    {
                        count: 1.3,
                        name: "Verify user is able to remove text from password textfield",
                        expect: "User should be able to remove text from password textfield",
                        password: "admin@vaahcms"
                    },

                    {
                        count: 1.4,
                        name: "Verify by clicking on the eye icon password should be shown for Password text-field",
                        expect: "Password should be shown when user click on the eye icon.",
                        email: "",
                        password: "1323456",
                        assert_signInPageTitle: "Sign In"
                    },
                    {
                        count: 1.5,
                        name: "Verify that the labelled text present in Submit button is properly displayed",
                        expect: "Labelled text should be properly displayed.",
                        assert: {
                            submitButton_labelledText: "Sign In",
                            signInPageTitle: "Sign In"
                        }
                    }
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