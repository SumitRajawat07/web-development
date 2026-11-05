let arr = [2, 2, 1, 2, 3, 2, 2];
let count = 0;
let candidate = null;

for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
        candidate = arr[i];
    }

    if (arr[i] === candidate) {
        count++;
    } else {
        count--;
    }
}

let freq = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
        freq++;
    }
}

console.log(freq > arr.length / 2 ? candidate : "No Majority");