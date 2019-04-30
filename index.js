var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 item = {
   itemName : String(item),
   itemPrice: Math.floor(Math.random() * 101)
 };
 cart.push(item);
 return item.itemName + ' has been added to your cart.';
}

function viewCart() {
    var answer = 'In your cart, you have ';
if (cart.length !== 0){
  for(var i = 0; i >= cart.length; i++){
    answer  += cart[i].itemName + ' at ' + cart[i].itemPrice;
    if(i !== cart.length-1){
      answer += ',';
    } else {
      answer += '.';
    }
  } return answer;
} else {
  return 'Your shopping cart is empty.';
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
