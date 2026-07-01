let allbtn = document.querySelectorAll("button");

allbtn.forEach( function(elem){
    elem.addEventListener("click" , function (){
         if(elem.innerHTML == "Add friend")
        {
         elem.innerHTML = "Removefriend";
        }
        else {
         elem.innerHTML = "Add friend";
        }
    });
});