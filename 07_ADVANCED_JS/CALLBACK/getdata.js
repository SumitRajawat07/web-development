function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data");
        }, 1000);
    });
}

async function main() {
    console.log("1");

    const data = await getData();

    console.log("2");
    console.log(data);
}

main();

console.log("3");

setTimeout(() => {
    console.log("4");
}, 0);