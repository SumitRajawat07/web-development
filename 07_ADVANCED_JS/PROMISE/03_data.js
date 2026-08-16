let data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data received successfully");
    }, 2000);
});

data
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });