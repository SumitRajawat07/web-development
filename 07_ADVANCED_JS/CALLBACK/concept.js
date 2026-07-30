function first(callback) {
    console.log("1");
    callback("javascript");
}

function second(language){
    console.log(language);
}

console.log("start");
first(second);
console.log("end");