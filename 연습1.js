const products = document.querySelectorAll(".product") // 상품리스트 불러오고
const cart = document.querySelector("#cart") // 드래그해서 닿을씨 색깔변하고, 나가면 색깔 다시, 드래그하면 색깔 사라지기
const cartitem = document.querySelector("#cart-items") // 상품이 추가 되는곳
const totale = document.querySelector("#total") // 합계 나오는 곳

let total = 0; // 합계 값

products.forEach(product => { // 반복문으로 여러번 드래그 이벤트 발생하도록
    product.addEventListener('dragstart', e => { // dragstart <= 드래그 발생했을 때 <= 이때 데이터 저장 가능
        e.dataTransfer.setData("name", product.dataset.name) // 드래그 할때 html 이름 데이터 저장
        e.dataTransfer.setData("price", product.dataset.price) // 드래그 할때 html 가격 데이터 저장
    })
})

cart.addEventListener("dragover", e => { // dragover <= 드래그 드롭 영역으러 왔을 때 e는 드래그 하는 객체(product)
    e.preventDefault(); // 브라우저 기본동작 막기
    cart.classList.add("dragover"); // 바뀌어라 클래스로
})

cart.addEventListener("dragleave", ()=> { // 떠나면 다시 원위치
    cart.classList.remove("dragover");
})

cart.addEventListener("drop", e => { // 드래그 됬을 때 => ※ 중요
    e.preventDefault(); // 동작 막기
    cart.classList.remove("dragover") // 다시 원위치 <= 이건 안중요

    // ▼ 메인 

    const name = e.dataTransfer.getData("name") // 저장 했던 값을 꺼내와라
    const price = parseInt(e.dataTransfer.getData("price")) // parseInt <= 문자열 값 정수로

    const item = document.createElement("div") // 새로운 <div></div> 박스
    item.classList.add("cart-item") // <div class="cart-item"></div> 로 생성
    item.textContent = `${name} - ₩${price.toLocaleString()}`; // 텍스트로 추가 div박스안 => <div class="cart-item">헤드폰 - ₩150,000</div>
    cartitem.appendChild(item) // ↓ cartitem에 추가

    //<div id="cart-items">
    //   <div class="cart-item">노트북 - ₩1,200,000</div>
    //</div>

    item.addEventListener('click', () => { // 클릭 시 객체 삭제
        cartitem.removeChild(item) // 없에기 아이템
        total -= price; // 가격에서도 빼기 갱신
        totale.textContent = total.toLocaleString(); // 갱신하기 만약 없으면 갱신 안됨 가격
    })

    total += price; // 더하기
    totale.textContent = total.toLocaleString(); // 더한값 span 태그에 갱신
})
