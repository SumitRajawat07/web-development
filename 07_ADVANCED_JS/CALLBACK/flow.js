function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data");
        }, 1000);
    });
}

async function main() {
    console.log("1");

    const p1 = getData();
    const p2 = getData();

    console.log("2");

    const result1 = await p1;
    console.log(result1);

    const result2 = await p2;
    console.log(result2);

    console.log("3");
}

console.log("Start");
main();
console.log("End");