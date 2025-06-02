let menubutton = document.getElementById('menubutton');
let menubar = document.getElementById('menubar');

menubutton.addEventListener('click', function() {
    menubar.classList.toggle('show')
});