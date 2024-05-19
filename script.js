const foodPrices = {
    "Chow Chow Bath":40 ,
    "Idli Sambar": 60,
    "Medu Vada": 35,
    "Set Dosa": 80,
    "Hyderabadi Chicken Biryani": 210,
    "Bisibelebath": 70,
    "Mango Chitranna": 150,
    "Veg Meals": 260,
    "Guntur Chicken": 180,
    "Chicken Ghee Roast": 140,
    "Filter Coffee": 30,
    "Ragi Mude":180,
    "Chicken Nati Biryani":200,
    "Lemon Soda":60,
    "Non-Veg Thali":440,
};

let cart = [];

function addToCart() {
    const foodItem = document.getElementById('foodItem').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = foodPrices[foodItem];

    const cartItem = { foodItem, quantity, price };
    cart.push(cartItem);

    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.quantity} x ${item.foodItem} - ₹${item.price * item.quantity}`;
        cartItems.appendChild(li);
    });
}

function placeOrder() {
    if (cart.length > 0) {
        localStorage.setItem('orderDetails', JSON.stringify(cart));
        window.location.href = 'slip.html';
    } else {
        alert('Your cart is empty!');
    }
}
