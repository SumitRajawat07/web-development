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

async function main() {
    console.log("Start");

    const p1 = task1();
    const p2 = task2();

    const result = await Promise.all([p1, p2]);

    console.log(result);
    console.log("End");
}

main();

console.log("Outside");