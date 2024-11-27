    //  color changer

const body = document.body;
const mydiv = document.getElementById('mydiv');
const textwale = document.getElementById('textwale')
const colorBox1 = document.getElementById('color-box1');
const colorBox2 = document.getElementById('color-box2');
const colorBox3 = document.getElementById('color-box3');
const colorBox4 = document.getElementById('color-box4');
const button = document.getElementById("Change");
const reset = document.getElementById("reset");
const LASTLINE = document.getElementById("LASTLINE");

// whole back ground reset button
reset.addEventListener('click', ()=>{
    body.style.background ='white'; 
    textwale.style.color = 'black';
    LASTLINE.style.color = 'black';
    // reset.innerText.style.color =" whiie";
});

reset.addEventListener('mouseenter', ()=>{
    body.style.background ='#ea49cf'; 
    textwale.style.color = 'black';
    LASTLINE.style.color = 'black';
});

//main

textwale.addEventListener('mouseenter',() =>{
    body.style.backgroundColor = "black"; 
    textwale.style.color = 'white';  
    LASTLINE.style.color = 'white';
});

textwale.addEventListener('mouseout',() =>{
    body.style.backgroundColor = "salmon";  
    textwale.style.color = 'black';
    LASTLINE.style.color = 'black';
});

colorBox1.addEventListener('mouseenter',() =>{
    body.style.backgroundColor = "red";
    textwale.style.color = 'black';
    LASTLINE.style.color = 'black';
});

colorBox2.addEventListener('mouseenter',() =>{
    body.style.backgroundColor = "blue";
    textwale.style.color = 'black';
    LASTLINE.style.color = 'black';
});

colorBox3.addEventListener('mouseenter',() =>{
    body.style.backgroundColor = "yellow";
    textwale.style.color = 'black';
    LASTLINE.style.color = 'black';
});

colorBox4.addEventListener('mouseenter',() =>{
    body.style.backgroundColor = "green";
    textwale.style.color = 'black';
    LASTLINE.style.color = 'black';
});

