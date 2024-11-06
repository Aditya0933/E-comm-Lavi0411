document.addEventListener('DOMContentLoaded', () => {
    // Retrieve product details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = String(urlParams.get('id'));
    console.log("productId in productDetails Page" + productId);
    const productImage = urlParams.get('image');
    const productTitle = decodeURIComponent(urlParams.get('title'));
    const productDescription = decodeURIComponent(urlParams.get('description'));
    const productPrice = parseFloat(urlParams.get('price'));

    // Check if the product details are available
    if (productImage && productTitle && !isNaN(productPrice)) {
        // Display the product details
        document.getElementById('product-image').src = productImage;
        document.getElementById('product-name').textContent = productTitle;
        document.getElementById('product-description').textContent = productDescription;
        document.getElementById('product-price').textContent = `Price: ₹${productPrice.toFixed(2)}`;

        // Check current quantity in cart and update the display
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItem = cartItems.find(item => item.id === productId);
        let quantity = existingItem ? existingItem.quantity : 1; // Set to existing quantity or 1

        // Display initial quantity
        document.getElementById('quantity').textContent = quantity;

        // Event listeners for increment and decrement
        document.getElementById('increment').addEventListener('click', () => {
            quantity++;
            document.getElementById('quantity').textContent = quantity; // Update displayed quantity
        });

        document.getElementById('decrement').addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                document.getElementById('quantity').textContent = quantity; // Update displayed quantity
            }
        });

        document.getElementById('add-to-cart').addEventListener('click', () => {

            const IncQuanCartItem = JSON.parse(localStorage.getItem('cartItems')) || [];
            console.log("IncQuanCartItem in the Product Details.js" + IncQuanCartItem);
            const result = addToCart(String(productId), productImage, productPrice, productTitle, quantity);

            if (result.newlyAdded) {
                showPopup('Product added to cart!');
                updateCartCount(); // Update cart count only for new item
            } else {
                showPopup(`This product is already in your cart! Current quantity is ${result.currentQuantity}.`);
            }
        });

        // Initialize cart count
        updateCartCount();
    } else {
        // Handle case where product details are not found
        document.getElementById('product-name').textContent = 'Product Not Found';
        document.getElementById('product-description').textContent = '';
        document.getElementById('product-price').textContent = '';
    }
});

// Add to Cart Function
function addToCart(id, img, price, title, quantity) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item.id === String(id));

    if (existingItem) { 
        existingItem.quantity = quantity; // Increase quantity if item already exists
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return { newlyAdded: false, currentQuantity: existingItem.quantity }; // Return current quantity
    } else {
        cartItems.push({ id: String(id), img, price: Number(price), title, quantity });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return { newlyAdded: true }; // Item was newly added
    }
}

// Function to show popup
function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup'; // Add a class for styling
    popup.textContent = message;
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.remove();
    }, 3000); // Remove popup after 3 seconds
}

// Update Cart Count Function 
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log(cartItems);
    console.log(cartItems.length);

    // cartItems.forEach(element => {
    //     element.addEventListener('click', () => {
    //         console.log('element : ');
    //         console.log(element);
    //     })
    // });

    let proDucCartItemTotNum = document.getElementById('cart-count');
    console.log('proDucCartItemTotNum');
    console.log(proDucCartItemTotNum);
    document.getElementById('cart-count').textContent = cartItems.length;
    // let totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    // totalCount = cartItems.length;
    // console.log(totalCount);
    // document.getElementById('cart-count').textContent = totalCount > 0 ? totalCount : '0';
    // console.log("This is the totalCount value in the Product Details" + totalCount);
}