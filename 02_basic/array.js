// ARRAY :
// It is object .
// It has content collection of multiple item in similar variable .
// It has reuseable .(it has mix data type).
// array element cannot be access arbetory string .
// it has zero base indexing .
// it make salo copy : salo copy of an object whose reference same reference .
// deep copy : it cannot sane reference .
const myArr = [0, 1, 2, 3, 4, 5];
const myHero = ["hanuman", "ram", "krishna" ];
const myArr2 = new Array(1, 2, 3, 4); // declare in key word .

console.log(myArr[2]);

// Array method :

myArr.push(6); // add element in last .
myArr.push(7); 
myArr.pop(); // remove element in last .
console.log(myArr);

myArr.unshift(9); // add first and shift all array .
myArr.shift(); // remove the first element .
console.log(myArr);

console.log(myArr.includes(8)); // it give bool data type .
console.log(myArr.indexOf(5));

const newArr = myArr.join(); // add all the element into string .

console.log(myArr);
console.log(newArr); // auto maticaly convert string .

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1, 3);
console.log("c",myArr);
console.log(myn2);




