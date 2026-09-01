function getData() {
    return Promise.reject("Failed");
}

async function main() {
    try {
        console.log("Start");

        const data = await getData();

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Finally");
    }

    console.log("End");
}

main();