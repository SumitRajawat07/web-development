
let age = prompt("apni age batao");

if(age === null)
{
    console.error("you entered a cancel");
}
else
{
    if(age.trim() === "")
    {
        console.error("enter something");
    }

    else
    {
        age = Number(age);
        if(isNaN(age))
        {
            console.error("please enter a number");
        }
        else
        {
           if(age < 0 ) console.error("your age is not expected");
           else if(age >= 18 ) console.log("you can vote");
           else console.log("you can not vote");
        }
    }
}