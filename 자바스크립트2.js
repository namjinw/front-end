const box = document.querySelector(".box");
const container = document.querySelector(".box-container");
const boxposition = container.clientWidth - box.clientWidth;
let position = 0;

function prevbutton() {
    if (position > 0) {
        position -= 300;
        if (position < 0) position = 0;
        box.style.left = position + 'px';
    }
};
function nextbutton() {
    if (position < boxposition) {
        position += 300;
        if (position > boxposition) position = boxposition;
        box.style.left = position + 'px';
    }
};