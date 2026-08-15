let prm = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve();
    },3000);

});

prm.then(function(){
    console.log("resolved");
});