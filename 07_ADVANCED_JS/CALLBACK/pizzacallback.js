function bringpizza(callback){
    console.log("pizaa lene gya ...");

    callback();
}
function callme(){
    console.log("pizaa agya hai ! muje call kiya.")
}

bringpizza(callme);