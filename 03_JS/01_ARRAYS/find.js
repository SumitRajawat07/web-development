let arr = [2, 2, 1, 1, 2, 2, 2];

let candidate = 0;
let count = 0;

for (let num of arr) {
    if (count === 0) candidate = num;

    count += (num === candidate) ? 1 : -1;
}

console.log(candidate);