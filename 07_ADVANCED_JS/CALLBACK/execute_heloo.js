function sayhello(){
    console.log("hello");
}

function execute(Callback) {
    Callback();
}

execute(sayhello);