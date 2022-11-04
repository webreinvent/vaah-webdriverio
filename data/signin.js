class Signin{

    static url = '/signin';

    constructor(url=null) {
        if(url){
            this.url = url;
        }
    }

}

module.exports = new Signin();