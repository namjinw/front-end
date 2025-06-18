const input = document.querySelector(".input"); //input 태그 가져오기
const li = document.querySelectorAll(".list li"); // ul li 가져오기

function search() { //검색 함수
    const query = input.value.trim().toLowerCase(); //query = 입력값, value = 값, trim = 공백제거  순순한 비교 ,toLowerCase = 대문자 > 소문자 변환, 한국어는 그대로

    if (query === "") { // 공백이라면 감추기
        li.forEach(li => li.style.display = 'none'); //li = 함수 => li1,li2,li3 각각에 쓰임
        return; //힘수종료 없응면 오류발생
    }

    li.forEach(li => {
        const text = li.textContent.toLowerCase(); //textContent = 텍스트만 가져옴
        li.style.display = text.includes(query) ? 'list-item' : 'none'; //includes = 값 비교
    });
}

input.addEventListener("input", search); // 함수호출 계속 실시간으로