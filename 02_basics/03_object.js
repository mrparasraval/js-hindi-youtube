// singletone
// object.create


const mySym = Symbol("key1")

// object.literals
const JsUser = {
    name: "Hitesh", 
    "full name": "Hitesh Choudhry",
    [mySym]:"key1",
    age: 18,
    location: "jaipur",
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    lastLogginDays:["sunday", "monday"]
}

console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "hiteshchchatgpt"
// Object.freeze(JsUser)
JsUser.email = "hitesh@mc.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






