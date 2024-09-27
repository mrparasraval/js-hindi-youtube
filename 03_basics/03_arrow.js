const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function Chai() {
    // let username = "Paras"
    // console.log(this.username);
// }
// Chai()

// const Chai = function () {
//     let username = "Paras"
//     console.log(this.username);
// }

const Chai =  () => {
    let username = "Paras"
    console.log(this.username);
}

// Chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => num1 + num2


// console.log(addTwo(3, 4));
