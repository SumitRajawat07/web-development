function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

async function main() {
    try {
        console.log("1");

        const data = await getData();

        console.log("2");
        console.log(data);

    } catch (error) {
        console.log("Error");
    }

    console.log("3");
}

console.log("Start");

main();

console.log("End");