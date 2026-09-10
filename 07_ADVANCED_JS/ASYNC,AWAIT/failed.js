async function getData() {
    try {
        const result = await Promise.reject("Failed");
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }

    console.log("Done");
}

console.log("Start");

getData();

console.log("End");