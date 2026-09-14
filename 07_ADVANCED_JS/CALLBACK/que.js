async function task() {
    console.log("1");

    await new Promise(resolve => {
        setTimeout(() => {
            console.log("2");
            resolve();
        }, 1000);
    });

    console.log("3");
}

console.log("Start");

task();

console.log("End");