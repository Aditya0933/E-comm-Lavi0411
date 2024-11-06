// let renderData = document.querySelector(".render");

// // Fetch Products
// async function getData() {
//     try {
//         const res = await fetch("https://fakestoreapi.com/products");
//         const data = await res.json();

//         data.forEach(ele => {
//             let productMainDiv = document.createElement("div");
//             productMainDiv.classList.add("box-main");

//             let createImgEle = document.createElement("img");
//             createImgEle.src = ele.image;

//             let createTitle = document.createElement("p");
//             createTitle.classList.add("productTitle");
//             createTitle.textContent = `${ele.title.slice(0, 35)}...`;

//             let createPriceEle = document.createElement("p");
//             createPriceEle.classList.add("price-element");
//             createPriceEle.textContent = `Price: ₹${ele.price}`;

//             let addToCartBtn = document.createElement("button");
//             addToCartBtn.classList.add("btn-element");
//             addToCartBtn.textContent = "Add to Cart";
//             addToCartBtn.addEventListener("click", () => {
//                 addToCart(ele.id, ele.image, ele.price, ele.title);
//             });

//             let productLink = document.createElement("a");
//             productLink.href = `./productDetails.html?id=${ele.id}&title=${encodeURIComponent(ele.title)}&price=${ele.price}&image=${encodeURIComponent(ele.image)}&description=${encodeURIComponent(ele.description)}`;
//             productLink.append(createImgEle);

//             productMainDiv.append(productLink, createTitle, createPriceEle, addToCartBtn);
//             renderData.appendChild(productMainDiv);
//         });
//     } catch (error) {
//         console.error("Error fetching data: ", error);
//     }
// }

// // Add to Cart
// function addToCart(id, img, price, title) {
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const existingItem = cartItems.find(item => item.id === id);

//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cartItems.push({ id, img, price: Number(price), title, quantity: 1 });
//     }

//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     updateCartCount(cartItems);
//     showPopup();
// }

// // Update Cart Count
// function updateCartCount(cartItems) {
//     const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
//     document.getElementById('cart-count').textContent = totalCount > 0 ? totalCount : '0';
// }
// console.log("test")