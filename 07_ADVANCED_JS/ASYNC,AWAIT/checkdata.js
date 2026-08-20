function getData() {
    return new Promise((resolve, reject) => {
        reject("Server Error");
    });
}

async function fetchData() {
    try {
        let data = await getData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();