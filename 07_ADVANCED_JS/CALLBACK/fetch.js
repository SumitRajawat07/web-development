// Higher-order function that accepts a callback
function fetchData(url, callback) {
  setTimeout(() => {
    const data = { message: "Hello from server!" };
    callback(data); // Invoke the callback with the result
  }, 1000);
}

// Callback function to handle the result
function handleResponse(data) {
  console.log("Received:", data.message);
}

// Usage
fetchData("https://api.example.com", handleResponse);
// Output after 1 second: "Received: Hello from server!"   