// Data Encapsulation 
function BankAccount(){
    let balance = 5000; // private variable
    return{
        getBalance(){
            console.log("you bank account balance is ", balance);
        },
        deposit(amount){
            balance += amount;
            console.log("you have successfull deposited",amount);
            console.log("Your currnet balance is ", balance);
        }
    }
}

let myAccount = new BankAccount();
console.log(myAccount.balance);