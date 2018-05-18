var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemObj = {itemName: item, itemPrice: Math.floor(100*Math.random())}
 cart.push(itemObj)
 return `${itemObj.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var start = "In your cart, you have,"
  var end = "."
  for (i = 0; i< cart.length; i++) {
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
