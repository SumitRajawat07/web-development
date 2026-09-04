// Outer function accepting a callback
function greet(name, callback) {
  console.log('Hello, ' + name);
  callback(); // Invokes the callback
}

// The callback function
function sayGoodbye() {
  console.log('Goodbye!');
}

// Passing the function reference (no parentheses)
greet('Alice', sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!   