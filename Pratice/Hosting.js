//  hoisting
syMyName("Divyanshu")

function syMyName(cute){
    console.log(cute);
}
syMyName("Divyanshu")

//  hositing is only possible with var and fucntion decleartion not with let and const, also not with fucntion experssion 
newName(); // this will throw an error 
let newName = function(){
    console.log("dibbu ");
    
}
newName();