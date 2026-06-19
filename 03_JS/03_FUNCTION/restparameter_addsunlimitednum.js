// first type

// function addunlimited(...num)
// {
//     let sum = 0;
//     num.forEach(function (val)
//      {
//         console.log(val);
//         sum = sum + val;
//     });
//     console.log(sum);
// }
// addunlimited(1,2,3,4,5,6,7,8,9);

// second type

// function addunlimited(...nums)
// {
//     sum = 0;
//     for(i = 0; i < nums.length; i++ )
//         sum = sum + nums[i];
//     console.log(sum);
// }
// addunlimited(1,2,3)

// third type

function addunlimited(...num)
{
    let ans = num.reduce(function (acc , val){
        return acc + val ;
    } ,0 );

    console.log(ans);
}
addunlimited(1,2,3);