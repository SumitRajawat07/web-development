// create a multiple user using class 

class user {
constructor(name,gmail,phonenumber){
    this.name = name;
    this.gmail = gmail;
    this.phonenumber = phonenumber;
}

login() {
    console.log("logged in");
}
}

let user1 = new user("sumit" ,"@;je",809387444423);
let user2 = new user("pratvi", "hakdh@" , 2434524);
let user3 = new user ("chaman" , "31131@" , 32131242);