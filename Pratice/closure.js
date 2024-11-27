// closure js 
let myName = 'Divyanshu'

function mainOne(){
    let myName = 'Srivastava';
    function mainTwo(){
        console.log(myName);
    }
    mainTwo();
}
mainOne(mainTwo());



function okayName(mysAy){
    return `HEllo g${mysAy} and this is `
};

const mysAy = 'Divaynshu'
console.log(okayName(mysAy));
