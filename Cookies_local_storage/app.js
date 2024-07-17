//started making task 7 accidentally before 5. go back to task 5 to create first functions like displaycart //


const availableItems = [
  "Shampoo",
  "Soap",
  "Sponge",
  "Water",
]


  function createStore() {
    let shopList = document.createElement("ul");
    let cart = document.getElementById("cart");
    cart.appendChild(shopList);
    availableItems.forEach(item => {
      let listitem = document.createElement("li");
      listitem.textContent = item;
      listitem.addEventListener("click", addItemToCart);
      shopList.appendChild(listitem);
    });
  }

function getCartFromStorage() {
  const cartitem = sessionStorage.getItem('cart');
  if (cartitem) {
    return JSON.parse(cartitem);
  } else {
    return {};
  }
}

// for task 7.   <script src="app.js"></script> //
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
