let arr = [1, 2, 3, 7, 5];
let target = 12;

let sum = 0;
let start = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while (sum > target && start <= i) {
        sum -= arr[start];
        start++;
    }

    if (sum === target) {
        console.log(arr.slice(start, i + 1));
        break;
    }
}