let arr = [10, 5, 20, 8, 15];

let smallest = Infinity;
let second = Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        second = smallest;
        smallest = arr[i];
    } else if (arr[i] < second && arr[i] !== smallest) {
        second = arr[i];
    }
}

console.log(second);