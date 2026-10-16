function orderReady() {
  console.log("Your order is ready!");
}

function placeOrder(callback) {
  console.log("Order placed");
  callback();
}

placeOrder(orderReady);