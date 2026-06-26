let img = document.querySelector("img");
let h2 = document.querySelector("h2 span");
let body = document.body

img.addEventListener("mouseover" ,function(){
    h2.innerHTML = "Virat kholi";
    body.style.backgroundColor = "red";
});

img.addEventListener("mouseout" , function(){
    h2.innerHTML = "king always a king ";
    body.style.backgroundColor = "silver";
});