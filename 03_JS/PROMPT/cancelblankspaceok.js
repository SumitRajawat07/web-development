 let age = prompt("age batao")

 if(age === null)
 {
    console.error("you entred a cancel");
 }
   else{
    if(age.trim() === "")
    {
       console.error("bhai dang se likh le"); 
    }
    else{
        age = number(age.tream());
        if(isnan(age)){
            console.error("bhai please number dede ");
        }
        else{
            console.log("confirm ye number h");
        }
    }
   }
   