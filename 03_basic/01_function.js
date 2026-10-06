

// function sayMyword(){
// console.log("H");
// console.log("e");
// console.log("l");
// console.log("l");
// console.log("o");
// }

// sayMyword() // it has exicution process of function .

// function addTwonumber(number1, number2){ // inside the  function it make paramiter .
//     console.log(number1 + number2);
// }

// // addTwonumber(3, 4); // wheen the function call called argument .
// const result = addTwonumber(2, 5);
// console.log(result);


// function addTwonumber(number1, number2){ 

// let result = number1 + number2 ;
// return result ;

// return number1 + number2 ;

// }


// const result = addTwonumber(2, 5);

// // console.log("result:", result);


// // function loginUserMessage(username){
// //     if(username === undefined){
// //          console.log("Please enter your user name: ");
//          return
//     }
//     return `${username} just login`;
// }

// // console.log(loginUserMessage("jyoti"));
// console.log(loginUserMessage()); // undefind .



// function loginUserMessage(username = "jyoti"){
//     if(!username){
//          console.log("Please enter your user name: ");
//          return
//     }
//     return `${username} just login`;
// }

// // console.log(loginUserMessage("jyoti"));
// console.log(loginUserMessage()); // undefind .




// function calculatecardPrice(...num1){ // ... it has rest or psraid operater .


// function calculatecardPrice(val1, val2, ...num1){
//     return num1;
// }

// console.log(calculatecardPrice(200, 400, 500, 3999));


const user = {
    username : "jyoti",
    prices : 1999
}

function handleObject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
}

// handleObject(user);

handleObject({            // direct pass object .
    username: "karan",
    price: 400
})


const mynewarray = [100, 200, 300, 40000, 50000, 600];

function returnsecondvalue(getarray){
    return getarray[2]
}

console.log(returnsecondvalue(mynewarray));