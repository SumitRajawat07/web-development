const h2 = document.querySelector("h2");
const characters = "ABCDEFGHIJKLMNOPQERSTUVWXYZabcdefghijklmnopqerstuvwxyz";
const text = h2.innerText;
let iteration = 0;

function randomtext() {
  const str = text.split("").map((char,index) => {

    if(index <= iteration) {
      return char;
    }

    return characters.split("")[Math.floor(Math.random()*52)]
  }).join("");
  h2.innerText = str;

  iteration += 0.25;
}

setInterval(randomtext,30);