let a = [1, 2, 2, 3];
let b = [2, 2, 4];
let result = [];
let used = [];

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j] && !used[j]) {
            result.push(a[i]);
            used[j] = true;
            break;
        }
    }
}

console.log(result);