let result = new Promise((resolve, reject) => {

    let success = true;

    console.log("Pending...");

    setTimeout(() => {
        if (success) {
            resolve("Promise Fulfilled!");
        } else {
            reject("Promise Rejected!");
        }
    }, 2000);

});

result
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });