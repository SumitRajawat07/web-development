let arr = [1, 2, 3, 4, 5];
let k = 2;

k = k % arr.length;

let result = [];

for (let i = arr.length - k; i < arr.length; i++) {
    result.push(arr[i]);
}

for (let i = 0; i < arr.length - k; i++) {
    result.push(arr[i]);
}

console.log(result);