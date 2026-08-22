function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);
    });
}

async function getData() {
    console.log("Inside function");

    const data = await fetchData();

    console.log(data);
}

console.log("Start");

getData();

console.log("End");