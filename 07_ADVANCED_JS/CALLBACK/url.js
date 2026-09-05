// Higher-order function
function fetchData(url, callback) {
  // Simulate async operation
  setTimeout(() => {
    callback("Data received from " + url);
  }, 1000);
}

// Callback function
function handleData(data) {
  console.log(data);
}

// Usage
fetchData("https://api.example.com", handleData);   