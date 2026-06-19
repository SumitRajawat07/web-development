function pure(a,b)
{
  console.log(a+b);
}

let global = 0;
function impure(a)
{
    global++;
    console.log(a + global);
}

pure(1 ,2);
pure(1,2);

impure(1, 2);
impure(1 ,2);