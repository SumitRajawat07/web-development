function parent()
{
    let a = 12;
    function child()
    {
        console.log(a);
    }
    child();
}
parent();