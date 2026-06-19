let arr = [ {
    team : "rcb",
    captain  : "rajat patidar",
    primarycolor : "red",
    secondarycolor : "golden"
},
{
    team : "kkr",
    captain  : "ajinkya rahane",
    primarycolor : "purple",
    secondarycolor : "lightpurple"
},
{
    team : "csk",
    captain  : "ms dhoni",
    primarycolor : "yellow",
    secondarycolor : "blue"
},
{
    team : "srh",
    captain  : "pat cummins",
    primarycolor : "orange",
    secondarycolor : "lightorange"
},
{
    team : "gt",
    captain  : "subhman gill",
    primarycolor : "blue",
    secondarycolor : "silver"
}]

let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let main = document.querySelector("main");

button.addEventListener("click",function(){
    let winner = arr[Math.floor(Math.random()*arr.length)];

    h1.innerHTML = winner.team;
    h1.style.backgroundColor = winner.secondarycolor;
    main.style.backgroundColor = winner.primarycolor;
});
