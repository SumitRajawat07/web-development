function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data mil gaya");
        }, 1000);
    });
}

async function showData() {
    console.log("1");

    const result = await getData();

    console.log(result);
    console.log("3");
}

console.log("Start");

showData();

console.log("End");