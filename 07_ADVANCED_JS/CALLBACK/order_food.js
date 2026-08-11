function orderFood(callback) {
    console.log("Food order ho raha hai...");

    setTimeout(() => {
        console.log("Food deliver ho gaya!");
        callback();
    }, 2000);
}

function sendNotification() {
    console.log("Notification: Your food has been delivered!");
}

orderFood(sendNotification);