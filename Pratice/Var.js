// console.log("Hey this side Divyanshu Srivastava");

// golbal scope
var age = 22;
if (true){
    console.log(`This print first golbal scoope of var ${age}`)
}

function nameff() {
    var age = 23
    console.log(`This print  function scoope of var ${age}`)
}
nameff()

var age = 24; // re define this value again this make issue 
console.log(`This print second golbal  scoope of var ${age}`)

//  var is creating debbugging isses at why we  don't use this at any place.