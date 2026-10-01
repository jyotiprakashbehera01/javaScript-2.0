const accountId = 144553 // When we canot change value .
let accountEmail = "jyoti@gmail.com" // let use to ehen variable may change .
var accountPassword = "123456"
accountCity = "Katak"
let accountState;

// accountId = 2 it has not allow .

accountEmail = "miku@gmail.com"
accountPassword = "432435345"
accountCity = "dubi"

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]) 
/*
prefer not to use var .
because of issue in block scope and functional scope .
*/
console.log(accountId);

