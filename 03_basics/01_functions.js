function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");    
}

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    
}

addTwoNumbers(3, 4)

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ",result); 




function loginUserMassage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMassage("hitesh"));
// console.log(loginUserMassage());

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`useraname is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject (user)
handleObject({
    username: "neel",
    price: 399
})