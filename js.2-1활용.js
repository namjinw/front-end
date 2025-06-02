const toolbutton = document.getElementById('toolbutton');
const toolbox1 = document.getElementById('toolbox1');

toolbutton.addEventListener('click', function() {
    toolbox1.classList.toggle('show')
});