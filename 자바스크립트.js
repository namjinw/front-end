const box = document.querySelector(".box");
const bigbox = document.querySelector(".bigbox");
let position = 0;
const maxposition = bigbox.clientWidth - box.clientWidth;

function moveleft() {
    if (position > 0) {
        position -= 150;
        if (position < 0) position = 0;
        box.style.left = position + 'px';
    }
};
function moveright() {
    if (position < maxposition) {
        position += 150;
        if (position > maxposition) position = maxposition;
        box.style.left = position + 'px';
    }
};