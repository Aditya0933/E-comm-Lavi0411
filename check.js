// check



document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the success popup
    document.getElementById('success-popup').style.display = 'flex';

    // Clear the form
    this.reset();
});

// Close the popup when the user clicks on <span> (x)
document.getElementById('close-popup').onclick = function() {
    document.getElementById('success-popup').style.display = 'none';
}

// Close the popup when the user clicks anywhere outside of the popup
window.onclick = function(event) {
    if (event.target === document.getElementById('success-popup')) {
        document.getElementById('success-popup').style.display = 'none';
    }
}
