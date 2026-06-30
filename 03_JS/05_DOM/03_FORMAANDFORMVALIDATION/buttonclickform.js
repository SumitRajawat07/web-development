let allbtn= document.querySelectorAll("button");

allbtn.forEach(function(elem){  
    elem.addEventListener("click",function(){
        console.log("clicked button");
    });
});