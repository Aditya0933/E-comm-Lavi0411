document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Retrieve the `categoryId` from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('categoryId'); // Get the categoryId from the URL query string

    // Step 2: Check if categoryId exists and fetch the category data
    if (categoryId) {
        console.log("Category ID from URL:", categoryId);
        loadSubcategories(categoryId); // Call function to load subcategories based on the categoryId
    } else {
        console.log("No categoryId found in the URL.");
    }
});

// Function to load subcategories data by categoryId
function loadSubcategories(categoryId) {
    console.log(categoryId);
    // Fetching the category data (from a JSON file or API endpoint)
    fetch('shop.json')  // Replace with your actual JSON or API URL
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log("categoryId at23:", categoryId);
            console.log(data.categories[categoryId]);
            // Find the category using the categoryId passed in the URL
            const category = data.categories.find(c => c.id === parseInt(categoryId));

            console.log("category:", category)
            // Check if category exists
            if (category) {
                // Step 3: Display subcategories and category details
                displaySubcategories(category);
            } else {
                console.log("Category not found for categoryId:", categoryId);
            }
        })
        .catch(error => {
            console.error("Error fetching category data:", error);
        });
}

// Function to display subcategories and category details
function displaySubcategories(category) {
    // Get the container where subcategories will be displayed
    const subcategoryContainer = document.getElementById('subcategoryContainer');

    // Display category name and description
    const categoryName = document.createElement("h2");
    categoryName.textContent = category.name;
    subcategoryContainer.appendChild(categoryName);

    const categoryDescription = document.createElement("p");
    categoryDescription.textContent = category.description;
    subcategoryContainer.appendChild(categoryDescription);

    // Display subcategories dynamically
    const subcategoryListContainer = document.createElement("div");
    subcategoryListContainer.classList.add("subcategories-list");

    category.subcategories.forEach(subcategory => {
        const subcategoryDiv = document.createElement("div");
        subcategoryDiv.classList.add("subcategory");

        const subcategoryTitle = document.createElement("h3");
        subcategoryTitle.textContent = subcategory.name;
        subcategoryDiv.appendChild(subcategoryTitle);

        const subcategoryDescription = document.createElement("p");
        subcategoryDescription.textContent = subcategory.description;
        subcategoryDiv.appendChild(subcategoryDescription);

        // Append the subcategory div to the list container
        subcategoryListContainer.appendChild(subcategoryDiv);
    });

    // Append subcategory list container to the main category container
    subcategoryContainer.appendChild(subcategoryListContainer);
}

loadSubcategories();

// Back button to navigate to the categories page
document.getElementById('backToCategories').addEventListener('click', function () {
    window.location.href = 'shop.html'; // Redirect to categories page
});


