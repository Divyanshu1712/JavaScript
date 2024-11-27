// let code = new Promise((resolve, reject) =>{
//     console.log("PRomeise part is here");
//     // resolve('Your order is done')
//     reject('Order cal!')
// });

function async(){
    return  new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Some Data1');
            resolve('Success')
        }, 2000);
    });
};
console.log('Fetching Data1');
let p1= async();
p1.then((res)=>{
    console.log(res);
    
});
