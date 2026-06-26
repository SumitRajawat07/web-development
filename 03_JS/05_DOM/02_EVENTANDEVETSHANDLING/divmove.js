let div = document.querySelector("div");

window.addEventListener("mousemove",function(dets){
    div.style.top = dets.clientY + "px";
    div.style.left = dets.clientX + "px";
});