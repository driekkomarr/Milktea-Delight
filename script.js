// script.js
const menuToggle = document.getElementById("menu-toggle");
const navbarLinks = document.getElementById("navbar-links");
const closeButton = document.getElementById("close-button");

function thankMsg() {
        alert("Thank you for buying!");
    }

// Function to toggle the navbar
function toggleNavbar() {
    navbarLinks.classList.toggle("active");
}

// Event listener for menu toggle button
menuToggle.addEventListener("click", toggleNavbar);
closeButton.addEventListener("click", toggleNavbar);

// Close the navbar when clicking outside
document.addEventListener("click", function(event) {
    const isClickInside = navbarLinks.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInside) {
        navbarLinks.classList.remove("active");
    }
    
});