
let a = 0;

let int = setInterval( () => {
    a++;
    console.log(a);
},100);

setTimeout(() => {
    clearInterval(int);
}, 5000);