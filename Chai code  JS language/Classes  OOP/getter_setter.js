class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return this.password.toUpperCase()
    }
}

const hitesh = new User ("hitesh.ai", "123")
console.log(hitesh.password);