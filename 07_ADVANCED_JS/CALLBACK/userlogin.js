function loginuser(username,cb){
    console.log("login user")
    setTimeout(() => {
        cb({id : 12121 , username: "sumit"})
    }, 1000);

}
function fetchpermission(id , cb){
    console.log("fetching permission")
    setTimeout(() => {
        cb((["read" , "write", "delete"]))
    },2000)
}

function loaddashboard(){
    console.log("loading dashboard")
    setTimeout(() => {
        cb();
    }, 2000);

}

loginuser("sumit",function(userdata){
    fetchpermission(userdata.id,function(permissions){
        loaddashboard(permissions ,function(){
            console.log("dashboard loaded");
        });
    });

});