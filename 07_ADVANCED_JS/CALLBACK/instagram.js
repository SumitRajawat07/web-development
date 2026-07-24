function instagramsedatallao(username,cb){
    setTimeout(() => {
        cb({uniqueid : 2244 , username : "sumit"} );
    },3000)
}

function metakepassjao(uniqueid , cb){
    setTimeout(() => {
        cb(["imag1","imag2","imag3"]);
    },4000)
} 

instagramsedatallao("harsh" ,function(data){
    metakepassjao(data.uniqueid , function(image){
        console.log(image);
    });

})