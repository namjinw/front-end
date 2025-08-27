const b = document.querySelector(".b")

let index = 0;

function move() {
    index++;
    b.style.transition = "transform 0.5s linear";
    b.style.transform = `translateX(${-300 * index}px)`;

    if (index === 5 - 1) {
        setTimeout(() => {
            index = 0;
            b.style.transition = "none";
            b.style.transform = `translateX(${-300 * index}px)`;
        }, 500)
    }
}

setInterval(move, 3000)
