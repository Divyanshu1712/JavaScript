// why function in js known as first class 
/*
Functions in JavaScript are "first-class" because they can be used as values—assigned to variables, passed as arguments, returned from other functions, and stored in data structures. This feature unlocks powerful capabilities like callbacks, higher-order functions, closures, and functional programming techniques, making JavaScript a highly flexible language
*/

// assigned value 

const naming = function(){
    console.log(" assigned value as function...........");
    
}

naming();

// function as return 
function greetMe(greet, fullname){
    console.log("helloo", fullname);
    greet()
}

function greet (){
    console.log("hello bhai sexy lg rhe ho");
}

greetMe(greet, "Divyanshu Srivastav")
