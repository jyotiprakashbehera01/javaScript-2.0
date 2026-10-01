// it has pain point of js.

// Date :

// let myDate = new Date()
// console.log(myDate);
// // add string
// console.log(myDate.toString());
// // convert local string
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let mycreateDate = new Date(2024, 0, 23, 5, 3);
// console.log(mycreateDate);
// console.log(mycreateDate.toString());
// console.log(mycreateDate.toLocaleString());


 let mywonDate = new Date("01-14-2020"); // indian time
// console.log(mywonDate.toLocaleString());


let myTimeStamp = Date.now(); // It use to exact time stamp .
// console.log(myTimeStamp); // it give mili sec .
// console.log(mywonDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ""
})
