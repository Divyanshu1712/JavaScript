//  for loop
// for (initialization; condition; afterthought)
//     statement

for (let i = 0; i < 5; i++){
    // console.log(i);
}

// while loop

let i = 1 // initialization
while(i<6){ //condition
    if (i == 3)
        break;
    else{
        // console.log(i)
        i++ //afterthought
    }
}

// reverse counting 

for (let i = 10; i>0; i--){
    // console.log(i);
    
}

// break in looop

for (let i=1; i<6;i++){
    if(i == 5)
        break;
    else{
        // console.log(i);
    }
}

// continue in loop

for (let i = 1 ; i <= 10;i++){
    if (i == 5)
        continue // contiune skip the iteration  (1 2 3 4 6 7 8 9 10)
    // else if(i == 7)
    //     break;   // break stop the loop here at 7 (1 2 3 4 6) like 5 skip in contiune portion and after 6 it will be break
    else{
        console.log(i);
    }
}