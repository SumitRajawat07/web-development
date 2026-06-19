let attempt = 0;
let sahipassword = "sumit";
let userpassword = prompt ("apna password batao");
attempt++;

while(attempt < 3 && sahipassword !== userpassword)
{
     userpassword = prompt("apna password batao")
    attempt++;
}
if(attempt === 3 && sahipassword !== userpassword)
{
    console.error("account blocked");
}
else
{
    console.log("account opened");
}