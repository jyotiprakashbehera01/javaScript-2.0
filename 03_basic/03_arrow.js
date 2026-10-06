const user = {
    username: "jyoti",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , wellcome to website`);
        console.log(this);
    }

}


//  user.welcomeMessage()
//  user.username = "mikuuuuuuuuuu"
//  user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "raka"
//      console.log(this.username);
// }

// one()


// const chai = function () {
//     let username = "raka"
//     console.log(this.username);
// }


// const chai =  () => {
//     let username = "raka"
//     console.log(this);
// }

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implicity return ....

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "jyoti"})

console.log(addTwo(3, 5))