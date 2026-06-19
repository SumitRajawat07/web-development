let word = prompt("word bolo");
counter = 0;

while(word !== "stop")
{
    if(word === "yes") counter++;
    word = prompt("word bolo");
}

console.log(`total words of yes is :  ${counter}`);