let attempt = 0;
let accountopened = false;
let pass = "sumitrajawat";

let password = prompt("password batao");
attempt++;

if(password === pass) accountopened = true;

while(password !== pass)
{
    if(attempt === 3)
    {
        console.error("account blocked");
        break;
    }
     prompt("password batao");
    attempt++;  
if(password === pass) accountopened = true;
}
if(accountopened === true) console.log("accountopened");

