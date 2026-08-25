function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Server error");
        }, 1000);
    });
}

async function fetchData() {
    console.log("Start");

    try {
        const data = await getData();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }

    console.log("End");
}

fetchData();