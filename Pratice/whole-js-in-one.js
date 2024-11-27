// // // console.log('***********************************');
// // // // console.log("Strings");
// // // // let mainName = 'Divyanshu';
// // // // let mainTwo = 'My name is Divyanshu, here im learning js and revsion types'
// // // // console.log(`.charAt use here: ${mainName.charAt(3)}`);  //y
// // // // console.log(`concat use here = ${mainName.concat(mainTwo)} `);
// // // // // Divyanshu is designer and developer

// // // // let includerPrototype = mainTwo.includes(mainName)?'is ': 'or not';
// // // // console.log(includerPrototype);

// // // // console.log(`indexOf uses here : ${mainTwo.indexOf(mainName)}`);

// // // // console.log( `here we see .lastnidexoD = ${mainName.lastIndexOf('s')}`);

// // // // let new11 = mainTwo.lastIndexOf(mainName);
// // // // console.log(new11); // index value show here

// // // // let slice1 = mainTwo.slice(3,11,);
// // // // console.log(`here we use slice- string prototype: ${slice1}`); // start with inital index and goes to end index but don't include end index

// // // // let split1 = mainTwo.split('' );
// // // // console.log(`here we use the split methods: ${split1}`); // split all over the string 

// // // // let split2 = new Array(split1);
// // // // // console.log(split2);

// // // // console.log(mainName.substring(1));

// // // // // console.log(`.toupperCase we use: ${mainName.toUpperCase()}`);
// // // // // console.log(`.toupperCase we use: ${mainName.toLowerCase()}`);
// // // // console.log(`.toupperCase we use: ${mainName.trim()}`); // remove extra spaces form there form  staring and ending

// // // // console.log(`we use here .replace == ${mainName.replace('Divyanshu', 'Dibbu')}`); // replace the value form the string with new you mentioned.
// // // // console.log(`we use here .replace == ${mainName.replace('Divyanshu', mainTwo)}`); // replace the value form the string with new you mentioned.

// // // // console.log(`ends with we check ${mainTwo.endsWith('types')}`);
// // // // console.log(`stratwith we check and=  ${mainTwo.startsWith('My')}`);

// // // console.log('***********************************');
// // // console.log('Maths Methods');

// // // console.log(`here we Math.abs(-23) = ${Math.abs(-23)}`); // return absolute value here like number is here -23 but the value we got is 23

// // // // let 
// // // console.log(`here we use min  = ${Math.min(3,2,3,4,5)}`);
// // // console.log(`here we use max = ${Math.max(3,2,3,4,5)}`);
// // // console.log(`here we use floor= ${Math.floor(2322.232)}`); // in floor this remove after dot/point value 
// // // console.log(`here we use round  = ${Math.round(2322.632)}`); // round off basically

// // // console.log(`here we use random =  ${Math.random()}`); // always give value in btw 0 and  1
// // // console.log(`here we use random =  ${Math.floor(Math.random()* 16)}`); 
 
// // // console.log(`here we use he trunc = ${Math.fround(85875.76747)}`);

// // console.log(`here we use he trunc = ${Math.trunc(434)}`);

// // // console.log('***********************************');

// // let datee = new Date(' Nov 17 2024');

// // console.log(datee.toDateString()); // sun nov 17 2024 in this format

// // console.log(datee.getTime());

// // // console.log('***********************************');
// console.log('Arrays methods');

// let callArr = [1,2,3,4]
// // console.log();
// push.callArr(4);
// console.log(callArr);




// console.log(typeof NaN);

// console.log('5' + 3); // 53
// console.log('5' - 3); //2

// console.log(1<2<3); // 1 is less than 2 so this is true and true < 3 here value of true is 1,So 1<3 means 1 is less than 3 this is true so this overall equation is true.
// console.log(3>2>1); // here 3>2 3 greater 2 so answer is ture and same as above ture > 1 SO, this is seems like this ( 1 > 1 )=> this equation is false so overall equation is false.

// console.log(1>2 && 2 > 3);
// console.log(3>2  && 2> 1);


// order of executions
console.log('A');


setTimeout(()=>{
    console.log("B");
    
},0);

let newOkat = ['c','D'];
newOkat.forEach((x)=>{console.log(x)});

console.log('E');

