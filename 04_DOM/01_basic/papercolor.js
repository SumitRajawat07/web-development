let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", function(){
    let div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.position = "absolute"

    let x = Math.random()*100;
    let y = Math.random()*100;
    div.style.left = x + "%";
    div.style.top = y + "%";

    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;


    main.appendChild(div)
})