// Strings....... Sequence of char

// print strings in many ways

let firstName = "divyanshu";
let lastName = 'Srivastava';
// console.log(firstName + " " + lastName);

//  here is using bactricks ( `` ) this also known as  template literals or backticks(``)

let fullName = `My name 
is 
Divyanshu 
Srivastava
i'm tech 
engineer here
as well as 
Full Stack developer`

// console.log(fullName);
// console.log(typeof fullName);


let anotherName = new String("Divyanshu Srivastava");
// console.log(anotherName);
// console.log(typeof anotherName); // type is object btw


// sub string
let newlenght = "divyanshu and Anshika"
console.log(newlenght.length);
console.log(newlenght.substring(12,-2));

// split 

let sentence = "I have to do everythings realy this time you can't stop anythings";
let wod = sentence.split(' ');
console.log(wod);
// console.log(typeof wod);
console.log(typeof wod.join(' '));
