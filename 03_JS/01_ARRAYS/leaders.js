let arr = [16, 17, 4, 3, 5, 2];
let result = [];
let max = -Infinity;

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
        result.push(arr[i]);
        max = arr[i];
    }
}

console.log(result.reverse());