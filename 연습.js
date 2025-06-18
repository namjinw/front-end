const slide = document.querySelector('.img-slider');
const sli = document.querySelectorAll('.slide').length;
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
let slidenumber = 0;

function movi() {
    slide.style.transform = `translateX(-${slidenumber * 800}px)`;
}

function buttonhidden() {
    button2.style.display = slidenumber === 0 ? 'none' : 'block';
    button1.style.display = slidenumber === sli - 1 ? 'none' : 'block';
}

function next() {
    if (slidenumber < sli - 1) {
        slidenumber++;
        movi();
        buttonhidden();
    }
}

function prev() {
    if (slidenumber > 0) {
        slidenumber--;
        movi();
        buttonhidden();
    }
}

const move = document.querySelectorAll('.menu');
const content = [
    document.querySelector('.content1'),
    document.querySelector('.content2'),
    document.querySelector('.content3'),
    document.querySelector('.content4'),
    document.querySelector('.content5')
];

move.forEach((item, index) => {
    item.addEventListener('click', () => {
        content[index].scrollIntoView({ behavior: 'smooth'});
    });
});