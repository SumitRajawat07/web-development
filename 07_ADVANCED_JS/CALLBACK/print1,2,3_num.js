function num1(callback){
    console.log("1");
    callback();
}

function num2(){
    console.log("2");
}
num1(num2);
console.log("3");