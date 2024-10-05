const darkNav = document.querySelector('.dark-nav');
const lightNav = document.querySelector('.light-nav');

// Show dark navigation by default
darkNav.style.display = 'flex';
lightNav.style.display = 'none';

// Add a scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        // Hide dark nav and show light nav when scrolling
        darkNav.style.display = 'none';
        lightNav.style.display = 'flex';
    } else {
        // Show dark nav when scrolled to the top
        darkNav.style.display = 'flex';
        lightNav.style.display = 'none';
    }
});

const logoContainer = document.querySelector('.logo-container');
const totalLogos = logoContainer.children.length;
let currentIndex = 0;

// Function to shift logos based on the current carousel item
function updateLogoScroll(index) {
    // Calculate the amount to translate based on the current index
    const translateX = -index * 100; // Adjust this value based on the logo width
    logoContainer.style.transform = `translateX(${translateX}%)`;
}

// Event listener for carousel slide event
$('#carouselExampleIndicators').on('slide.bs.carousel', function (event) {
    currentIndex = event.to; // Get the index of the next carousel item
    updateLogoScroll(currentIndex);
});

// Initialize the logo scroll on page load
updateLogoScroll(currentIndex);