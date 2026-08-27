function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("First task completed");
        }, 2000);
    });
}

function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Second task completed");
        }, 1000);
    });
}

async function runTasks() {
    console.log("Start");

    const first = await firstTask();
    console.log(first);

    const second = await secondTask();
    console.log(second);

    console.log("End");
}

runTasks();