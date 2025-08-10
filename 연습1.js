const boxs = document.querySelectorAll(".div-box");
let observ = new IntersectionObserver((e) => {
    e.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    })
}, {threshold: 0.5})
boxs.forEach(box => observ.observe(box))

const nav = document.querySelector(".tap");
const navgation = document.querySelector(".navgation");

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 350) {
//         nav.style.transform = "translateY(-100%)";
//     }
//     else {
//         nav.style.transform = "translateY(0)";
//     }
// })

window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
        navgation.style.transform = "translateY(-150%)";
    }
    else {
        navgation.style.transform = "translateY(0)";
    }
})