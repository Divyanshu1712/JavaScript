// array 

let arr1 = [1,3,4,1]
// console.log(arr1);

console.log('****************************************');

// create array with constructor 
let arr2 = new Array("divyanshu ",1,true);
// console.log(arr2);

console.log('****************************************');
//  Length game
let lengthArr = [1,2,3,4,5,6]
console.log('Length of Array: ',lengthArr.length);
console.log(`main array ${lengthArr} and when we do this "lengthArr.length = 2" we got this : ${lengthArr.length = 2} the new sort array based on the length`);
console.log(lengthArr.length = 2);


console.log('****************************************');

// built-in array function 
let furits = ["apple","banana","orange","blueberry","dargonFruits"];
console.log("main array:",furits);


//1. push and pop == add and delete element form last only
furits.push("owl");
console.log("push :",furits);
furits.pop();
console.log("pop: ",furits)


// shift and unshift === add and remove element form start
furits.shift();
console.log("shift:",furits);
furits.unshift("owl")
console.log("shit",furits);

console.log('****************************************');
// slice take the dedicate part out  furits.slice(2,4) look like this where start with 2 and end with 4 where 4 is not included

console.log('****************************************');
let sliceFur = furits.slice(2,4);
console.log("slice :",sliceFur);

console.log('****************************************');
// MAP() , Filter () main function we use in arrays
//map functions
let mapArr = [1,2,3,4];
let squareArr = mapArr.map(Number => Number*20);
console.log(`orgianl araay ${(mapArr)} after map function we use result: ${(squareArr)}`);

console.log('****************************************');
// filter arr and take out the even number

let filterArr = [1,2,3,5,4,5,6,7,8,9,10];
let AnsFilter = filterArr.filter(Number=> {
    if (Number % 2 == 0){
        return true
    }
    else{
        return false
    }
});
console.log(`Main array ${filterArr} and after  using filter function the new array is ${AnsFilter}`);

console.log('****************************************');
// filter questions mixed array
let filterMixed = [2,5,'Divyashu',76,'anshika',true, false,60]
let ansFilterMixed = filterMixed.filter(value =>{
    if(typeof(value) == 'string'){
        return true
    }
    else{ 
        return false
    }
});
console.log(`Main array: ${filterMixed} and after we use filter:  ${ansFilterMixed}`);

console.log('****************************************');
// sort function 



// console.log('****************************************');

// console.log(`main araay: ${sortArr} after sort function in acesding order we got ans : ${sortArr.sort()}`);
// // console.log(`main araay: ${sortArr} after sort function in descending order  we use ans : ${sortArr.sort(-1)}`);
// let sortArr = [2,5,1,7,8,4,5,6];
// sortArr.sort();
// console.log(sortArr);
// console.log("index of 5:",sortArr.indexOf(5));

console.log('****************************************');
// for each 
let forEachArr = [1,2,3,'Divyansu'];
forEachArr.forEach((value, index) =>{
    console.log("Number:",value," ","index:",index);
    
});

console.log('****************************************');
// concat two array 
let conArr1 = [1,2,3];
let conArr2 = [4,5,6];
let newConArr = conArr2.concat(conArr1);
console.log(`we have two array ${conArr1} and ${conArr2} after using concat new array  ${newConArr}`);


console.log('****************************************');
// using function in arr
let funcArr = [3,5,2,6,9];



function arrFunction (funcArr){
    let lenFun = funcArr.length;
    let sum = 0;
    for (let index = 0; index < lenFun; index++){
        sum = sum + funcArr[index]
    }
    return sum;
}

let total = arrFunction(funcArr);
console.log(total);

console.log('****************************************');
// find()

let findArr = [4,34,56,12,56,32235,6];
let mainFind = findArr.find((elemnet) => elemnet <100);
// in find()   
console.log(`Using find() here so main arr :${findArr} and got this result: ${mainFind} `);

console.log(mapArr.reverse());


