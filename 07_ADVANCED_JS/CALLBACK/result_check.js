function checkResult(callback) {
    console.log("Result check ho raha hai...");

    setTimeout(() => {
        console.log("Result aa gaya!");
        callback();
    }, 2000);
}

function tellResult() {
    console.log("Tumhare marks aa gaye!");
}

checkResult(tellResult);