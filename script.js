let renderData = document.querySelector(".renderData");

// Fetch Products
async function getData() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data); // Debugging line to check the fetched data

        data.forEach(ele => {
            let productMainDiv = document.createElement("div");
            productMainDiv.classList.add("box-main");

            // Create image element
            let createImgEle = document.createElement("img");
            createImgEle.src = ele.image; // Ensure this is the correct path
            createImgEle.alt = ele.title; // Optional: Adding alt text

            // Create title element
            let createTitle = document.createElement("p");
            createTitle.classList.add("productTitle");
            createTitle.textContent = `${ele.title.slice(0, 35)}...`;

            // Create price element
            let createPriceEle = document.createElement("p");
            createPriceEle.classList.add("price-element");
            createPriceEle.textContent = `Price: ₹${ele.price}`;

            // Add to cart button
            let addToCartBtn = document.createElement("button");
            addToCartBtn.classList.add("btn-element");
            addToCartBtn.textContent = "Add to Cart";
            addToCartBtn.addEventListener("click", () => {
                addToCart(ele.id, ele.image, ele.price, ele.title);
            });

            // Create product link to details page
            let productLink = document.createElement("a");
            productLink.href = `./productDetails.html?id=${ele.id}&title=${encodeURIComponent(ele.title)}&price=${ele.price}&image=${encodeURIComponent(ele.image)}&description=${encodeURIComponent(ele.description)}`;
            productLink.append(createImgEle);

            // Append all elements to the main div
            productMainDiv.append(productLink, createTitle, createPriceEle, addToCartBtn);
            renderData.appendChild(productMainDiv);
        });
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

// Add to Cart Function
function addToCart(id, img, price, title) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item already exists
    } else {
        cartItems.push({ id:String(id), img, price: Number(price), title, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update cart count and show popup only if the item is newly added
    updateCartCount(cartItems);
    if (!existingItem) {
        showPopup(); // Show popup only for new items
    }
}

// Update Cart Count Function
function updateCartCount(cartItems) {  
    // const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartAllItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log(cartAllItems);
    let totalCount = cartAllItems.length;
    document.getElementById('cart-count').textContent = totalCount > 0 ? totalCount : '0';
}

// Show Popup (Add your own popup logic here)
function showPopup() {
    alert("Product added to cart!"); // Temporary alert for demonstration
}

// Handle Search Functionality
function handleSearch() {
    const searchQuery = document.querySelector('.search-bar').value.toLowerCase();
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery)
    );

    renderData.innerHTML = ''; // Clear current products
    displayProducts(filteredProducts); // Display filtered products
}

// Function to display products (used for rendering filtered products)
function displayProducts(products) {
    products.forEach(ele => {
        let productMainDiv = document.createElement("div");
        productMainDiv.classList.add("box-main");

        let createImgEle = document.createElement("img");
        createImgEle.src = ele.image;
        createImgEle.alt = ele.title;

        let createTitle = document.createElement("p");
        createTitle.classList.add("productTitle");
        createTitle.textContent = `${ele.title.slice(0, 35)}...`;

        let createPriceEle = document.createElement("p");
        createPriceEle.classList.add("price-element");
        createPriceEle.textContent = `Price: ₹${ele.price}`;

        let addToCartBtn = document.createElement("button");
        addToCartBtn.classList.add("btn-element");
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.addEventListener("click", () => {
            addToCart(ele.id, ele.image, ele.price, ele.title);
        });

        let productLink = document.createElement("a");
        productLink.href = `./productDetails.html?id=${ele.id}&title=${encodeURIComponent(ele.title)}&price=${ele.price}&image=${encodeURIComponent(ele.image)}&description=${encodeURIComponent(ele.description)}`;
        productLink.append(createImgEle);

        productMainDiv.append(productLink, createTitle, createPriceEle, addToCartBtn);
        renderData.appendChild(productMainDiv);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    getData();
    updateCartCount(JSON.parse(localStorage.getItem('cartItems')) || []);
    document.querySelector('.search-bar').addEventListener('input', handleSearch); // Search event listener
});
