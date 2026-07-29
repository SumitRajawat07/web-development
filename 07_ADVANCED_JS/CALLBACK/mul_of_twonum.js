function calculate(a,b ,callback){
    let result = a*b;
    callback();
}

function show() {
    console.log("answer is : " + ans);

calculate(9,9,show);
}