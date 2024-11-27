const container = document.getElementById('container');
const mainSection = document.getElementById("main-section");
const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const box4 = document.getElementById('box-4');
const reset = document.getElementById('reset');


box1.addEventListener('mouseenter',() =>{
    container.style.backgroundColor = "red";
    textwale.style.color = 'black';
    LASTLINE.style.color = 'black';
});

box2.addEventListener('mouseenter',() =>{
    container.style.backgroundColor = "#20cb20";
    textwale.style.color = 'black';
    LASTLINE.style.color = 'black';
});

box3.addEventListener('mouseenter',() =>{
    container.style.backgroundColor = "#204bcb";
    textwale.style.color = 'black';
    LASTLINE.style.color = 'black';
});

box4.addEventListener('mouseenter',() =>{
    container.style.backgroundColor = "#cb20ac";
    textwale.style.color = 'black';
    LASTLINE.style.color = 'black';
});

reset.addEventListener('click', ()=>{
    container.style.backgroundColor = "black"
});