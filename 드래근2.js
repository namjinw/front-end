const products = document.querySelectorAll(".product");
const dragcart = document.querySelector(".cart-icon");
const dragicon = document.querySelector("#icon")
const draglinebox = document.querySelector(".drag-hover-box")
const dragline = document.querySelector(".drag-hover-line");
const cartitems = document.querySelector(".cart-items")
const totalEl = document.querySelector(".total-box span");

// 장바구니 삭제
cartitems.addEventListener('click', e => {
    if (e.target.classList.contains("remove-btn")) {
        e.target.closest(".cart-item").remove();
        updateTotal();
    }
});

// 드래그 시작
products.forEach(product => {
    product.addEventListener('dragstart', e => {
        e.dataTransfer.setData("name", product.dataset.name)
        e.dataTransfer.setData("price", product.dataset.price)
        const img = product.querySelector("img")
        e.dataTransfer.setData("img", img.src)
    })
})

// 드래그 오버 효과
function addover() {
    dragline.style.border = `1px solid black`;
    dragline.style.color = `black`;
    draglinebox.style.height = `40px`;
    dragline.style.height = `32px`;
    dragline.style.lineHeight= `30px`;
    dragicon.classList.remove("fa-cart-plus")
    dragicon.classList.add("fa-cart-arrow-down")
}

// 드래그 떠날 때
function addleave() {
    dragline.style.border = `1px dashed gray`;
    draglinebox.style.height = `30px`;
    dragline.style.color = `rgb(135, 135, 135)`;
    dragline.style.height = `23px`;
    dragline.style.lineHeight= `20px`;
    dragicon.classList.remove("fa-cart-arrow-down")
    dragicon.classList.add("fa-cart-plus")
}

dragcart.addEventListener('dragover', e => {
    e.preventDefault();
    addover();
})
dragcart.addEventListener('dragleave', e => {
    e.preventDefault();
    addleave();
})

function updateTotal() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach(item => {
        const qty = parseInt(item.querySelector(".qty").textContent);
        const priceText = item.querySelector(".price").textContent.replace(/,/g,'').replace('원','');
        const price = parseInt(priceText);
        total += qty * price;
    });
    totalEl.textContent = total.toLocaleString();
}

function productmake(name, price, imgsrc) {
    let cartitem = cartitems.querySelector(`.cart-item[data-name="${name}"]`);

    if (cartitem) {
        let qtyEl = cartitem.querySelector(".qty");
        qtyEl.textContent = parseInt(qtyEl.textContent) + 1;
        
        let priceEl = cartitem.querySelector(".price");
        priceEl.textContent = price.toLocaleString() + '원';
    } else {
        // 새로운 상품 추가
        cartitems.innerHTML += `
            <div class="cart-item" data-name="${name}">
                <img src="${imgsrc}" width="150">
                <span class="name">${name}</span>
                <span class="qty">1</span>
                <span class="price">${price}원</span>
                <button class="remove-btn">삭제</button>
            </div>
        `;
    }
    updateTotal();
}

// 드래그 드롭 이벤트
dragcart.addEventListener('drop', e => {
    e.preventDefault();
    addleave();

    const name = e.dataTransfer.getData("name");
    const price = parseInt(e.dataTransfer.getData("price"));
    const imgsrc = e.dataTransfer.getData("img")
    productmake(name, price, imgsrc)
})

// 버튼으로 상품 추가
function addproduct(name, price, imgsrc) {
    productmake(name, parseInt(price), imgsrc);
}
