let main = document.querySelector("#main");
let img = document.querySelector("#cursor");

main.addEventListener("mousemove",function(dets) {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
});