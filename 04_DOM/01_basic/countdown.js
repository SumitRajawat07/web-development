let h1 = document.querySelector("#h1");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");

let count = 0

increase.addEventListener("click",function(){
    count++;
    h1.innerHTML = count;
});
decrease.addEventListener("click",function(){
    count--;
    h1.innerHTML = count;
});