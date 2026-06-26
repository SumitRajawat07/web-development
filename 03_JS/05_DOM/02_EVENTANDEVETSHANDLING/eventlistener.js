let p = document.querySelector("p");

function fn(){
    p.style.color = "red";
}
function f2()
{
    p.style.color = "yellow";
}

p.addEventListener("click",fn);
p.addEventListener("dblclick",f2);
p.removeEventListener("click",fn);
