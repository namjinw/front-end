const slider = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide").length;
const prev = document.querySelector(".prevbutton")
const next = document.querySelector(".nextbutton");
let namder = 0;

function slidemove() {
    slider.style.transform = `translateX(-${namder * 525}px)`;
}

function prevb() {
    if(namder > 0) {
        namder--;
        slidemove();
        buttonhidden()
    }
}

function nextb() {
    if(namder < slide - 5) {
        namder++;
        slidemove();
        buttonhidden()
    }
}

function buttonhidden() {
    prev.style.display = namder === 0 ? 'none' : 'block';
    next.style.display = namder === slide - 5 ? 'none' : 'block';
}