async function makePayment() {
    console.log("Payment processing...");

    const result = await processPayment();

    console.log("Payment:", result);
}

makePayment();

console.log("Showing other information...");