function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data");
        }, 1000);
    });
}

async function main() {
    console.log("1");

    const p = getData();

    console.log("2");

    const data = await p;

    console.log("3");
    console.log(data);
}

console.log("Start");

main();

console.log("End");