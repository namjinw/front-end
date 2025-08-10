const h1 = document.querySelector(".h1");

let observe = new IntersectionObserver((e) => {
    e.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0%)";
        }
    });
});
observe.observe(h1)