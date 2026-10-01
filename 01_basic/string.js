 const name = "jyoti"
 const repocount = 50


// old method =  console.log(name + repocount + " value"); 

console.log(`hello my name is ${name} and my repo count is ${repocount}`); // now time string declaretion . 

 const gamename = String('jyoti-dh-com'); // it string but stand like object .

console.log(gamename.split('-'));

// console.log(gamename);
console.log(gamename[0]); // access key value .
console.log(gamename.__proto__); // proto type access .
console.log(gamename.length); // length check .
console.log(gamename.toUpperCase()); // chane upper case .
console.log(gamename.charAt(2)); // check charecter through index .
console.log(gamename.indexOf('t')); // check index through charecter .
const newString = gamename.substring(0, 3); // slice the string .
console.log(newString);
const anotherString = gamename.slice(-8, 4); // use negative value .
console.log(anotherString);
const newStringOne = "      jyoti        ";
console.log(newStringOne);
console.log(newStringOne.trim()); // useing trim remove space .

const url = "https://jyoti.com/jyoti20.praksh"

console.log(url.replace('20', '_')); // use replace to replace thame .

console.log(url.includes('jyoti')); // check they are present or not .

console.log()

