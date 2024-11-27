// let clicktag = document.getElementById('clicktag');


// function clicking (){
//     let clicktag = document.getElementById('clicktag');
//     clicktag.textContent = "Sai ja rhe ho bhai !!!! "
// }

// clicktag.addEventListener('click', clicking);
// clicktag.removeEventListener('click', clicking);

// let achortag = document.getElementById('achortag');


// function achonrFun (event){
//     // let achortag = document.getElementById('achortag');
//     event.preventdefault();
//     achortag.textContent = " DOne dude u already do many things ";
// }

// achortag.addEventListener('click', achonrFun());



function clickb(event){
    alert("This para is clikced by : " + event.target.textContent);

}

let mydiv = document.getElementById('wrappper');
mydiv.addEventListener('click', clickb);