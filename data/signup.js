class Signup{

    constructor() {

        this.params = {
            group:{
                count: null,
                name: null,
            }
        }

        this.selectors = {
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
                        email : "demo@gmail.com",
                        password: "testing",
                        assert: {
                            error_msg: " Please fill out this field. ",
                            sign_up_page_heading: "Sign up to your account"
                        }
                    },
                    ]
            }
            ]
    }

}

module.exports = new Signup();