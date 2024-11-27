class human{
    // properties 
    nature = 'kind';
    // behaviour = smooth;
    age= 13;
    sex = 'male';

    //behavoiur of class

    speeling(){
        console.log("mai so rha hu ");
    }

    physical(){
        console.log("sex krna mtlb");
    }
};

let obj = new human();
console.log(obj.physical);

class home{
    room = 5;
    kitchen = "mom";
    bathroom = 1;

    food(){
        console.log("you have to meet this ", this.kitchen);
    }

    bath(){
        console.log("here  is only thi ", this.bathroom)
    }

}

let newHome = new home();
console.log(newHome);
newHome.food();
