let arr = [1, 2, 2, 3, 1, 2];
let freq = {};

for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
}

console.log(freq);