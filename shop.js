// THis is the shop.js file

async function catagoryProductsItem() {
    try {
        const response = await fetch('shop.json');
        const data = await response.json();

        // Assuming the array is inside a "categories" property
        if (Array.isArray(data.categories)) {
            // Get the container where we want to append all categories
            let productAllCategory = document.getElementById("productAllCategory");

            data.categories.forEach(category => {

                // Create the container for each category
                let categoryContainer = document.createElement("div");
                categoryContainer.classList.add("category-container");
                categoryContainer.id = category.id;

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

                // Create a single container for all subcategories
                let subcategoryContainer = document.createElement("div");
                subcategoryContainer.classList.add("subcategory-container");

                // Loop through subcategories
                category.subcategories.forEach(subcategory => {
                    // Create subcategory section
                    let subcategorySection = document.createElement("div");
                    subcategorySection.classList.add("subcategory-section");

                    // Subcategory title
                    let subcategoryTitle = document.createElement("h4");
                    subcategoryTitle.classList.add("subcategory-title");
                    subcategoryTitle.textContent = subcategory.name;

                    let subcategoryDesc = document.createElement("p");
                    subcategoryDesc.classList.add("subcategory-description");
                    subcategoryDesc.textContent = subcategory.description;

                    // Append subcategory title and description
                    subcategorySection.appendChild(subcategoryTitle);
                    subcategorySection.appendChild(subcategoryDesc);

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

                        let br = document.createElement("br");

                        let productPrice = document.createElement("span");
                        productPrice.classList.add("product-price");
                        productPrice.textContent = `$${item.price}`;

                        let productDesc = document.createElement("p");
                        productDesc.classList.add("product-description");

                        // Set a limit on the number of characters (e.g., 100)
                        let maxDescriptionLength = 20;

                        // Check if the description length exceeds the max length
                        if (item.description.length > maxDescriptionLength) {
                            // If the description is too long, truncate it and add "..."
                            productDesc.textContent = item.description.slice(0, maxDescriptionLength) + '...';
                        } else {
                            // If the description is short enough, show it fully
                            productDesc.textContent = item.description;
                        }



                        // Append product name, price, and description to the product item
                        productItem.appendChild(productItemImg);
                        productItem.appendChild(productName);
                        productItem.appendChild(br);
                        productItem.appendChild(productPrice);
                        productItem.appendChild(productDesc);

                        // Add the product item to the product grid
                        productGrid.appendChild(productItem);
                    });

                    // Append product grid to the subcategory section
                    subcategorySection.appendChild(productGrid);

                    // Append the subcategory section to the subcategory container
                    subcategoryContainer.appendChild(subcategorySection);
                });

                // Append subcategory container to the category container
                categoryContainer.appendChild(subcategoryContainer);

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

//This function I create for the open new page the particular one category which contains multiple type of items ...





// Event Delegation on the productAllCategory Container
// Select the parent container
const productAllCategoryContainer = document.getElementById("productAllCategory");

// Add an event listener to the parent container
productAllCategoryContainer.addEventListener("click", function (event) {
    // Check if the clicked element or any of its ancestors has the class "category-container-heading"
    const categoryHeading = event.target.closest(".category-container-heading");

    // If the element or its ancestors has the "category-container-heading" class
    if (categoryHeading) {

        const parentCategoryContainer = categoryHeading.closest(".category-container");
        
        if (parentCategoryContainer) {
    
            let parentCategoryId = parentCategoryContainer.id;
            openNewCategoryPage(parentCategoryId);
        }

    } else {
        // If the click didn't match the expected element
        console.log("Clicked outside of category container heading.");
    }
});







// Function to open the subcategories page and pass the parent category ID
function openNewCategoryPage(parentCategoryId) {
    console.log("categoryItems object in the openNewCategoryPage:", parentCategoryId);

    // Construct the URL with the parentCategoryId as a query parameter
    const url = `subcategories.html?categoryId=${parentCategoryId}`;
    
    // Redirect the user to the subcategories page
    window.location.href = url;
}


