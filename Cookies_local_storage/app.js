//started making task 7 accidentally before 5. go back to task 5 to create first functions like displaycart //


const availableItems = [
  "Shampoo",
  "Soap",
  "Sponge",
  "Water",
]

function isLocalStorageSupported() {
  try {
    const testKey = 'test';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

if (!isLocalStorageSupported()) {
  alert('Sorry, your browser does not support Web storage. Try again with a better one');
} else {
  createStore();
  displayCart();
}

function getCartFromStorage() {
  const cartitem = sessionStorage.getItem('cart');
  if (cartitem) {
    return JSON.parse(cartitem);
  } else {
    return {};
  }
}

function addItemToCart(item) {
  const cart = getCartFromStorage();
  if (cart) {
    if (cart[item]) {
      cart[item].quantity += 1;
    } else {
      cart[item] = { quantity: 1 };
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }
  displayCart();
}

function removeItemfromCart(item) {
  const cart = getCartFromStorage();
    if (cart && cart[item]) {
      if (cart[item].quantity > 1) {
        cart[item].quantity -= 1;
      } else {
        delete cart[item];
      }
    }
    displayCart();
  }

  function clearCart() {
    const cart = {};
    sessionStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }

  function createStore() {

  }