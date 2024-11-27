// primtive data type / Refrence datatype = data store in heap.

// array 
let arr = [1,2,3,4];
console.log(arr);

// array create with  constuctor
let newArr = new Array(4,2,"hey",13,13,1)
console.log(newArr);







// object
let obj = {
    "name": "divyanshu ", // we can write in double qoute js treated as same
    "full name": "divyanshu srivastava", // when we have space in btw we have to use double qoutes
    age: 22,
    email: "divyanshu231@gmail.com",
    okay: function(){
        console.log(`my name is ${this["full name"]}, age: ${this.age}`)
    }

}
console.log(obj);
obj.okay();