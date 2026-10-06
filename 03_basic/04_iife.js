// immideatly invoked function Expression (IIFE)
// reduced global scope polution .

(function one(){
    // named iife
    console.log(`DB CONNECTED`);
})();
// fast parenthisis  rite defination  and second parethisis and exicution 

// one()

( (name) => {
    // unnamed iife...
    console.log(`DB CONNECTED TWO ${name}`);
}  )('jyoti')