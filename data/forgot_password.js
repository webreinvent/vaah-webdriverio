class Fpassword{

    constructor() {

        this.params = {
            group:{
                count: null,
                name: null,
            }
        }

        this.selectors = {
            forgot_password: '=Forgot Password?',
            page_heading: 'h3'
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
                ]
            }
        ]
    }

}

module.exports = new Fpassword();