const box = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide").length;
let m = 0;

function mi() {
    box.style.transform = `translateX(-${m * 900}px)`
}

function p() {
    if (m > 0) {
        m--;
        mi();
    }
}

function n() {
    if (m < slide - 1) {
        m++;
        mi();
    }
}