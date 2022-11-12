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


                    }
                    ]
            }
            ]
    }

}

module.exports = new Signup();