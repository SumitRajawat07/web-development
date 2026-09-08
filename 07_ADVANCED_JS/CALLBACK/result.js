function task() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Done");
        }, 1000);
    });
}

async function main() {
    console.log("1");

    const result = await task();

    console.log("2");
    console.log(result);
}

main();

console.log("3");