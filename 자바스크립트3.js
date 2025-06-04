const box = document.querySelector(".box");
const menu = document.querySelector(".menu");
const sub1 = document.querySelector(".sub1")
const submenu1 = document.querySelector(".submenu1");
const sub2 = document.querySelector(".sub2");
const submenu2 = document.querySelector(".submenu2");
const sub3 = document.querySelector(".sub3");
const submenu3 = document.querySelector(".submenu3");
const sub4 = document.querySelector(".sub4");
const submenu4 = document.querySelector(".submenu4");
const after = document.querySelector(".menu.after")

box.addEventListener('click', () => {
    menu.classList.toggle('after');
    submenu1.classList.remove('show1');
    submenu2.classList.remove('show2');
    submenu3.classList.remove('show3');
    submenu4.classList.remove('show4');
});

sub1.addEventListener('click', () => {
    submenu1.classList.toggle('show1');
    submenu2.classList.remove('show2');
    submenu3.classList.remove('show3');
    submenu4.classList.remove('show4');
})

sub2.addEventListener('click', () => {
    submenu2.classList.toggle('show2');
    submenu1.classList.remove('show1');
    submenu3.classList.remove('show3');
    submenu4.classList.remove('show4');
})

sub3.addEventListener('click', () => {
    submenu3.classList.toggle('show3');
    submenu1.classList.remove('show1');
    submenu2.classList.remove('show2');
    submenu4.classList.remove('show4');
})

sub4.addEventListener('click', () => {
    submenu4.classList.toggle('show4');
    submenu1.classList.remove('show1');
    submenu2.classList.remove('show2');
    submenu3.classList.remove('show3');
})