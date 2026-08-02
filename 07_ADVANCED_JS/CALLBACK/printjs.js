function test(cb){
    cb();
    console.log("javascript");
}

function hello() {
    console.log("hello");
}

test(hello);