// const tinderUser = new Object(); // single ton object 

// const tinderUser = {} ; // non single ton user .

// tinderUser.id = "123abcd";
// tinderUser.name = "jyori";
// tinderUser.isLoggIn = false ;

//  console.log(tinderUser);

//  const regularUser = {
//     email: "jyoti@mail.com",
//     name: {
//         userfullnmae: {
//             firstname : "jyoti",
//             lastname : "prakash"
//         }
//     }
    
//  }
// console.log(regularUser);
// console.log(regularUser.name.userfullnmae.firstname); // it has nested .


// const obj1 = {1: "a", 2:"b"}
// const obj2 = {3: "c", 4:"d"}

// // const obj3 = Object.assign({}, obj1, obj2); // object assingn is static method .
// const obj3 = {...obj1, ...obj2};

// console.log(obj3);

// const user = [
//     {
//         id: 1,
//         email: "jyoti@mail.com"
//     },
//     {
//         id: 1,
//         email: "jyoti@mail.com"
//     },
//     {
//         id: 1,
//         email: "jyoti@mail.com"
//     },
//     {
//         id: 1,
//         email: "jyoti@mail.com"
//     },
//     {
//         id: 1,
//         email: "jyoti@mail.com"
//     },
// ]

// user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLOgged'));



const course = {
    coursename : " js in hindi",
    price :  "999",
    courseInstructer : "jyoti" 
}


// course.courseInstructer

// syntax : 

const {courseInstructer : instructur} = course

// console.log(courseInstructer);

console.log(instructur);