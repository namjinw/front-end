const products = document.querySelectorAll(".product")
const cartbox = document.querySelector(".cart-box")
const cartitems = document.querySelector(".cart-items")
const totalEl = document.querySelector(".total")

let total = 0;

products.forEach( product => {
    product.addEventListener('dragstart', e => {
        e.dataTransfer.setData("name", product.dataset.name);
        e.dataTransfer.setData("price", product.dataset.price);
        const img = product.querySelector("img")
        e.dataTransfer.setData("img", img.src);
    })
})

cartbox.addEventListener('dragover', e => {
    e.preventDefault();
    cartbox.style.border = `1px solid gray`;
})

cartbox.addEventListener('dragleave', e => {
    e.preventDefault();
    cartbox.style.border = `1px solid black`;
})

cartbox.addEventListener('drop', e => {
    e.preventDefault();
    cartbox.style.border = `1px solid black`;

    e.preventDefault();
    cartbox.style.border = `1px solid black`;

    const name = e.dataTransfer.getData("name");
    const price = parseInt(e.dataTransfer.getData("price"));
    const imgsrc = e.dataTransfer.getData("img");

    let existingItem = cartitems.querySelector(`.cart-item[data-name="${name}"]`);

    if (existingItem) {
        let countEl = existingItem.querySelector(".count")
        countEl.textContent = parseInt(countEl.textContent) + 1;
    }
    else {
        const item = document.createElement("div");
        item.classList.add("cart-item");
        item.dataset.name = name;
        item.innerHTML = `<img src="${imgsrc}" alt="" style="width: 50px">
        <h1>${name}</h1> <p><span class="count">1</span>개 - <span class="price">${price.toLocaleString()}</span>원</p>
        <button class="delete-btn">삭제</button>`;
        cartitems.appendChild(item)

        item.querySelector(".delete-btn").addEventListener('click', e => {
        if(confirm(`${name}상품을 삭제하시겠습니까?`)) {
            item.remove();
            updateTotal()
        }})
    }
    updateTotal();
})

function updateTotal() {
    total = 0;
    const itemprixe = document.querySelectorAll(".cart-item")
        itemprixe.forEach(its => {
            const qty = parseInt(its.querySelector(".count").textContent)
            const mo = parseInt(its.querySelector(".price").textContent.replace(/,/g, ""))
            total += qty * mo;
        })
    totalEl.textContent = total.toLocaleString();
}