// ---------------- Objects ------------------ \\
// It's content key or value .

// Singleton : Object.create


// object literals :

const mysym = Symbol("key1"); // declaration symbol .


// declaration of object .
const JsUser = {
    name: "jyoti",
    "full name": "jyoti praksh behera",
    age: 32,
    [mysym]:"mykey1",
    location: "cuttack",
    email:"jyooti@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "sunday"]
}

// console.log(JsUser.email); // call on object .
// console.log(JsUser["email"]); 
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]); // call key in object .


JsUser.email = "mikuuuu@gmail.com"; // change object value .
// Object.freeze(JsUser); // freez value .
console.log(JsUser);


JsUser.greating  = function(){
    console.log("hellojs user");
}

console.log(JsUser.greating()); // undefind .


JsUser.greatingTwo  = function(){
    console.log(`hellojs user, ${this.name}`);
}

console.log(JsUser.greatingTwo());