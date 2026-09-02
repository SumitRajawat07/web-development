async function test() {
    console.log("1");

    const result = await "Hello";

    console.log(result);

    console.log("2");
}

console.log("Start");

test();

console.log("End");