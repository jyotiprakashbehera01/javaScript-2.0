/*

data type devided two type :
 premetive and non premetive .

 1. primitive :
 
 => 7 type = String, Number, Boolearn, Null, Undefind, Symbol(It use unique value), BigInt .

 2. Reference/Nonpremetive :
 
 => Array, Object, Function .
 
 => JavaScript is a dynamically typed language because variable types are determined at runtime,
    and a variable can hold values of different data types.
 

==> Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object




 */

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

//  defin symbol :
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

//bigInt :
const bigNumber = 59491619844581n

// Array :
const heros = ["hanuman", "ganesh", "ram"]

// Object :
let myObj = {
    name: "jyoti",
    age: 22
}

// function :
const myfunction = function(){
    console.log("Hello..jyoti");
}
// console.log( typeof (bigNumber));

// console.log( typeof myfunction);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*

MEMORY :
-> two type .

=>Stack
 -> use primitive .

=>Heep
 -> use nonprimitive .

*/

let myIgname = "jyotiprakash01"

let anothername = "codehub"         // myIgname  -- it should not change it give one copy data .

console.log(anothername);
console.log(myIgname);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "jyoti@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);