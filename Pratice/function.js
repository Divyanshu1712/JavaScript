//   Function

// function define
function nameok(){
    console.log("dibu");
}

// function call

// nameok()

// counting number
function numberCount(){
    for (let i = 1; i<111; i++ ) {
        console.log(i);
        
    }
}
// numberCount()

// passing parameter.

function superNum (num) {
    console.log("table OF :", num); 
    
    for (let i=1 ; i <11 ; i++){
        console.log(`${num} x ${i} = ${num * i }`);   
    }
}
superNum(2);

// return fucntion

function returnfucn (a,b,c){
    let sum = a + b + c
    // let sum = 1+ b   // block scope mai do br let nhi call kr skte ho
    return sum;

}

let sum = returnfucn(4,3,1); // here i created sum variable again 
console.log(`the sum of numer are ${sum}`)

//  create function in another wAy in vaiable form

let muultP = function (a,b){
    return a*b;
}
console.log(muultP(2,4));

// note: when ever create function using variable use const not let and var for better practice and zero debugging issuse

const newFunhere = function(num1,num3){
    return num1 + num3;
}
console.log(newFunhere(43,2))


//  arrow function 

const checkArrow = (num1,num3) => {
    return num1/num3;
}
console.log("arrow funcion ka anshwe" ,checkArrow(6,3));

// using function in arr
let funcArr = [3,5,2,6,9];
function arrFunction (funcArr){
    let lenFun = funcArr.length;
    let sum =0;
    for (let i = 0; i < lenFun; i++){
        sum = sum + funcArr[i]
    }
    return sum;
}

let total = arrFunction(funcArr);
console.log(total);

