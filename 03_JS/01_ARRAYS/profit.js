let arr = [7, 1, 5, 3, 6, 4];

let min = arr[0];
let profit = 0;

for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    profit = Math.max(profit, arr[i] - min);
}

console.log(profit);