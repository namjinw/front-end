const btn = document.getElementById("btn");
const response = document.getElementById("response");

btn.addEventListener('click', () => {
    fetch("/api/message")
        .then(res => res.json())
        .then(data => {
            response.textContent = data.message;
        })
        .catch(err => console.log(err))
});