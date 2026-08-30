function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1");
        }, 2000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2");
        }, 1000);
    });
}

async function run() {
    console.log("Start");

    const result = await Promise.all([task1(), task2()]);

    console.log(result);
    console.log("End");
}

run();