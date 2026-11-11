let arr = [1, 2, 4, 5, 6];
let n = 6;

let total = n * (n + 1) / 2;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(total - sum);