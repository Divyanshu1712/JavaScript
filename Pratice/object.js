// object

let symN = Symbol("key1")
let mainObj = {
    name: "divyanshu ", // we can write in double qoute js treated as same
    "full name": "divyanshu srivastava", // when we have space in btw we have to use double qoutes
    age: 22,
    mail: "divyanshu231@gmail.com",
    okay: function(){
        console.log(`my name is ${this["full name"]}, age: ${this.age}`)
    },
    'key1': ' helo there '

};

let mainAgian = Object.keys(mainObj);
let mainAgian1 = Object.values(mainObj);
let mainAgian2 = Object.entries(mainObj); 
console.log(mainAgian); // give only keys of object 
console.log(mainAgian1); // gives only value part of the object  
console.log(mainAgian2); // give whole data as in array form



// // object cloning 

// let cloneObj = {...mainObj};
// console.log(cloneObj);

// cloneObj.mail= "dansikask@an"

// console.log(cloneObj);

