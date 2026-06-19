let passwaord = "sumitrajawat";

let pass = prompt("please enter your password");

if(pass === null)
{
    console.error("you entered a cancel");
}
else
{
    if(pass.trim() === passwaord)
    {
        console.log("password matched");
    }
    else
    {
        console.error("password not matched");
    }
}