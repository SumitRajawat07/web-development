function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User found");
        }, 1000);
    });
}

async function showUser() {
    console.log("1");

    const user = await getUser();

    console.log(user);
    console.log("2");
}

console.log("Start");

showUser();

console.log("End");