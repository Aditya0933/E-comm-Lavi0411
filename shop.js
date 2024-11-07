async function catagoryProductsItem() {
    try {
        const response = await fetch('shop.json');
        const data = await response.json();
        console.log('Fetched data:', data);

        // Assuming the array is inside a "categories" property
        if (Array.isArray(data.categories)) {
            data.categories.forEach(category => {
                console.log("Category:", category);

                // Get the container where we want to append all categories
                let productAllCategory = document.getElementById("productAllCategory");

                // Create the container for each category
                let categoryContainer = document.createElement("div");
                categoryContainer.classList.add("category-container");

                // Create the category heading container
                let categoryContainerHeading = document.createElement("div");
                categoryContainerHeading.classList.add("category-container-heading");

                // Create the category title (h3)
                let categoryTitle = document.createElement("h3");
                categoryTitle.classList.add("category-title");
                categoryTitle.textContent = category.name;  // Category Name

                // Create the arrow icon (SVG)
                const arrowIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                arrowIcon.classList.add("arrow-icon");
                arrowIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                arrowIcon.setAttribute('viewBox', '0 0 16 16');
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', 'M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z');
                arrowIcon.appendChild(path);

                // Append category title and arrow icon to the heading container
                categoryContainerHeading.appendChild(categoryTitle);
                categoryContainerHeading.appendChild(arrowIcon);

                // Append heading to category container
                categoryContainer.appendChild(categoryContainerHeading);

                // Loop through subcategories
                category.subcategories.forEach(subcategory => {
                    // Create subcategory section
                    let subcategoryContainer = document.createElement("div");
                    subcategoryContainer.classList.add("subcategory-container");

                    // Subcategory title
                    let subcategoryTitle = document.createElement("h4");
                    subcategoryTitle.classList.add("subcategory-title");
                    subcategoryTitle.textContent = subcategory.name;

                    let subcategoryDesc = document.createElement("p");
                    subcategoryDesc.classList.add("subcategory-description");
                    subcategoryDesc.textContent = subcategory.description;

                    // Append subcategory title and description
                    subcategoryContainer.appendChild(subcategoryTitle);
                    subcategoryContainer.appendChild(subcategoryDesc);

                    // Create a grid for items inside the subcategory
                    let productGrid = document.createElement("div");
                    productGrid.classList.add("product-grid");

                    // Loop through items in subcategory
                    subcategory.items.forEach(item => {
                        let productItem = document.createElement("div");
                        productItem.classList.add("product-item");

                        // Product image container
                        let productItemImg = document.createElement("div");
                        productItemImg.classList.add("product-item-img");

                        // Product image
                        let img = document.createElement("img");
                        img.setAttribute("src", item.image);
                        img.setAttribute("alt", item.name);

                        // Add image to the product item
                        productItemImg.appendChild(img);

                        // Product name and description
                        let productName = document.createElement("span");
                        productName.classList.add("product-name");
                        productName.textContent = item.name;

                        let productPrice = document.createElement("span");
                        productPrice.classList.add("product-price");
                        productPrice.textContent = `$${item.price}`;

                        let productDesc = document.createElement("p");
                        productDesc.classList.add("product-description");
                        productDesc.textContent = item.description;

                        // Append product name, price, and description to the product item
                        productItem.appendChild(productItemImg);
                        productItem.appendChild(productName);
                        productItem.appendChild(productPrice);
                        productItem.appendChild(productDesc);

                        // Add the product item to the product grid
                        productGrid.appendChild(productItem);
                    });

                    // Append product grid to the subcategory container
                    subcategoryContainer.appendChild(productGrid);

                    // Append the subcategory container to the category container
                    categoryContainer.appendChild(subcategoryContainer);
                });

                // Append the category container to the main container
                productAllCategory.appendChild(categoryContainer);
            });
        } else {
            console.log('Categories is not an array:', data.categories);
        }

    } catch (error) {
        console.log('Error in the catagoryProductsItem function in the Shop.js Page ...', error);
    }
}

// Call the function to load categories and products
catagoryProductsItem();
