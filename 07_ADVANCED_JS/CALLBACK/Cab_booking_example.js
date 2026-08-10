function bookCab(callback) {
    console.log("Cab aa rahi hai...");

    setTimeout(() => {
        console.log("Cab aa gayi!");
        callback();
    }, 2000);
}

function notifyMe() {
    console.log("Driver ne mujhe notify kiya.");
}

bookCab(notifyMe);