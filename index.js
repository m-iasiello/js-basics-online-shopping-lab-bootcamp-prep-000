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
  if (cart.length>=1){
    var start = "In your cart, you have"
    var end = "."
    var middle = []
    for (var i = 0; i< cart.length; i++) {
      var current = cart[i]
      var currentItem = current.itemName
      var currentPrice = current.itemPrice
      var currentOutput = ` ${currentItem} at $${currentPrice}`
      middle.push([currentOutput])
    }  
    var cartOutput = start + middle.toString() + end
  }
  else {
    return "Your shopping cart is empty."
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
