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
                        expect: "Invalid Credentials",
                        title: "Validate with invalid credentials",
                        username: "asf",
                        password: "",
                        assert: "The email or username field is required."
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