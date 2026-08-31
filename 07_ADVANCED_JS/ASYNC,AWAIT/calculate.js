function getNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

async function calculate() {
    console.log("Start");

    const num = await getNumber();

    console.log(num * 2);

    console.log("End");
}

calculate();

console.log("Outside");