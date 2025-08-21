let weight = 173 //입력받기
let height = 60

let BMI = weight / ((height / 100) ** 2);
console.log ("BMI 수치는 => " + BMI.toFixed(2)) // 소수점 출력

let student = true;

console.log("학생이신가요? " + student)

function show() {
    let N = document.querySelector(".input1").value;
    let A = Number(document.querySelector(".input2").value);

    document.querySelector(".p1").innerText = N + "입니다"
    document.querySelector(".p2").innerText = A + "살 입니다"
}