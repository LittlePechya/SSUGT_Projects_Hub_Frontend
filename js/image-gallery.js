const wrapper = document.querySelector(".most-interesting"),
    carousel = document.querySelector(".most-interesting__carousel"),
    images = document.querySelectorAll(".most-interesint__img"),
    buttons = document.querySelectorAll(".most-interesting__button");


let imageIndex = 1, intervalId;

// Function to start automatic image slider
const autoSlide = () => {
    // Start the slideshow by calling slideImage every 2 seconds
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);
}

// Call autoSlide function on page load
autoSlide();

// Function that updates the carousel display to show the specified image
const slideImage = () => {
    // Calculate the updated image index
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    // Updae the carousel display to show the specified image
    carousel.style.transform = `translate(-${imageIndex * 100}%)`
}

// Function that updates the carousel display to show the next or previous image
const updateClick = (e) => {
    // Stop the automatic slideshow
    clearInterval(intervalId);
    // Calculate the updated image index based on the button clicked
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    autoSlide();
}
// Add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick))

// If the user hovers over the gallery, the slides stop
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// If the user hovers over the gallery, the slides stop
wrapper.addEventListener("mouseleave", autoSlide);