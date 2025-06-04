const slider = document.querySelector(".slider");
const totalslide = document.querySelectorAll(".slide").length;
let currentIndex = 0;

function updateSlidePosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

function prevslide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
};

function nextslide() {
    if (currentIndex < totalslide - 1) {
        currentIndex++;
        updateSlidePosition();
    }
};