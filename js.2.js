const toggleBtn = document.getElementById('toggleBtn');
const mybox = document.getElementById('mybox');

toggleBtn.addEventListener('click', function () {
    mybox.classList.toggle('show');
}) ;