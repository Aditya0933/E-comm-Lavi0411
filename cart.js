


console.log("This is the totalCount value in the Cart Pageeeeeeeeeeeeeeeeeeeeeeeeeee...");

const totalCount = document.getElementById('cart-count')
console.log("This is the totalCount value in the Cart Page..." + totalCount);
// // // Initialize
// // let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// // function addToCart(id, img, price, title, quantity = 1) {
// //     const existingItem = cartItems.find(item => item.id === id);

// //     if (existingItem) {
// //         existingItem.quantity += quantity; // Update quantity if item already exists
// //     } else {
// //         cartItems.push({ id, img, price, title, quantity }); // Add new item
// //     }

// //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
// //     updateCartCount(); // Update the cart count here
// // }

// // function updateCartCount() {
// //     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
// //     const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
// //     const cartCountElement = document.getElementById('cart-count');

// //     if (cartCountElement) {
// //         cartCountElement.textContent = totalCount > 0 ? totalCount : '0'; // Show count
// //     }
// // }

// // // Initialize
// // document.addEventListener('DOMContentLoaded', () => {
// //     updateCartCount(); // Initialize cart count on page load
// // });


// // cart.js

// // Function to update the cart icon
// function updateCartIcon() {
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const cartIcon = document.querySelector('.cart-icon'); // Adjust selector as needed

//     // Update the cart icon with the count of items
//     cartIcon.textContent = cartItems.length > 0 ? cartItems.length : '';
// }

// // Function to display cart items
// function displayCartItems() {
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const cartItemsContainer = document.getElementById('cart-items');
//     let totalPrice = 0;

//     cartItemsContainer.innerHTML = ''; // Clear the container before displaying items

//     cartItems.forEach(item => {
//         const itemTotal = item.price * item.quantity; // Calculate total for this item
//         totalPrice += itemTotal; // Add to overall total

//         const itemDiv = document.createElement('div');
//         itemDiv.className = 'cart-item';
//         itemDiv.innerHTML = `
//             <img src="${item.img}" alt="${item.title}">
//             <div>
//                 <h2>${item.title}</h2>
//                 <p>Price: $${item.price.toFixed(2)}</p>
//                 <p>Quantity: ${item.quantity}</p>
//                 <p>Total: $${itemTotal.toFixed(2)}</p>
//             </div>
//         `;
//         cartItemsContainer.appendChild(itemDiv);
//     });

//     document.getElementById('total-price').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
// }

// // Event listener for DOMContentLoaded
// document.addEventListener('DOMContentLoaded', () => {
//     displayCartItems();
//     updateCartIcon(); // Call to update cart icon on load
// });
