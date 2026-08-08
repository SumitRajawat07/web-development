function afterdelay(time,cb){
    setTimeout( function () {
        cb();
    },time)
}
    afterdelay(3000, function(){
        console.log("call back executed")
    });
