function N() {
    let A = document.querySelector(".NAME").value;
    let B = Number(document.querySelector(".intt").value);


    document.querySelector(".p1").innerText = A + "이고"
    document.querySelector(".p2").innerText = B * 2 + "이야"
}