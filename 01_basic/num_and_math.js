// --------------Number------------------//

// const score = 400;
// console.log(score); // 400
// const balance = new Number(100);
// console.log(balance); // [Number: 100]
// console.log(balance.toString().length); // convert string .
// console.log(balance.toFixed(2)); // 100.00

// const othernumber = 23.8966

// console.log(othernumber.toPrecision(3)); // use to prosision value .

// const hundreads = 1000000
// console.log(hundreads.toLocaleString('en-IN')); // detect counting value . 


//------------------Math-----------------//

// it's library give by default .

console.log(Math);
console.log(Math.abs(-4)); // make -ve to psetive and +ve to +ve .
console.log(Math.round(5.8)); // make round .
console.log(Math.ceil(4.2)); // chouse top value .
console.log(Math.floor(5.9)); // chouse floor value
console.log(Math.min(4,3,5,6,)); // find lowest value .
console.log(Math.max(4,6,7,8,8,)); // find maximum value .
console.log(Math.random()); // give default 0-1 vallue,
//  then you  multiply the it give minimum 1 value, it use floor.
console.log((Math.random()*10) + 1);
//
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+ min);