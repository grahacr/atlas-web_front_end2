//started making task 7 accidentally before 5. go back to task 5 to create first functions like displaycart //

const availableItems = [
  "Shampoo",
  "Soap",
  "Sponge",
  "Water",
]

function isSession() {
  try {
    const testKey = 'test';
    sessionStorage.setItem(testKey, testKey);
    sessionStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

if (!isSession()) {
  alert('Sorry, your browser does not support Web storage. Try again with a better one');
} else {
  createStore();
  displayCart();
}

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

// for task 7.   
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
    let available = document.createElement("h2");
    let shopList = document.createElement("ul");
    available.appendChild(shopList);
    let cart = document.getElementById("cart");
    cart.appendChild(shopList);
    availableItems.forEach(item => {
      let listitem = document.createElement("li");
      listitem.textContent = item;
      listitem.addEventListener("click", () => addItemToCart(item));
      shopList.appendChild(listitem);
  });
}

function displayCart() {
  const cartElement = document.getElementById('cart');

  let productsHeading = cartElement.querySelector('h2');
  if (!productsHeading) {
    productsHeading = document.createElement('h2');
    productsHeading.innerText = 'Your cart:';
    cartElement.appendChild(productsHeading);
  }

  let cartDiv = productsHeading.querySelector('div');
  if (!cartDiv) {
    cartDiv = document.createElement('div');
    productsHeading.appendChild(cartDiv);
  } else {
    cartDiv.innerHTML = '';
  }

  updateCart();
}

function updateCart() {
  const cart = getCartFromStorage();
  const cartDiv = document.getElementById('cartDiv');
  const cartSize = Object.keys(cart).length;
  const cartList = document.createElement('ul');
  cartDiv.appendChild(cartList);

  if (cartSize !== 0) {
    

  } else {
    const emptyCart = document.createElement('p');
    emptyCart.innerText = 'Your cart is empty'
    cartList.append(emptyCart);
  }
}