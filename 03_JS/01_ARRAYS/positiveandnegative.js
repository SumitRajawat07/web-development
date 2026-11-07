let arr = [10, -5, 20, -8, 0];
let positive = 0;
let negative = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positive++;
    } else if (arr[i] < 0) {
        negative++;
    }
}

console.log("Positive:", positive);
console.log("Negative:", negative);