function greet(callback){
    console.log("hello");
    callback();
}

function bye(){
    console.log("bye");
}
greet(bye);