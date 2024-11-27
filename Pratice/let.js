//  Let is blocked scope.


let age = 25;
console.log(age);

// let age = 24  // re definfed and re assigment both is not possible
console.log(age); // this throw an error

{
    let name = 'dibbu'
    console.log(name); // blockscope hai islye { in curly brackets ke ander se run ho hoga bhr nhi }
    //  let const both is block scope... ghar chota beta bs ghra ka nukr hai bhrka nahi 
}
// console.log(name); // this throw an undefiend error because the let is blocked scope
//  asie hum hum naukr ko dusre ghar wake access nhi kr paye ge
