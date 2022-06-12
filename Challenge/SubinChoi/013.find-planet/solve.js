/*
# 문제13 : 몇 번째 행성인가요?

우리 태양계를 이루고 있는 행성은 **수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성**으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다. 
출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

**입출력**

입력 : 1
출력 : 수성
*/

// const arr = [
//   "수성",
//   "금성",
//   "지구",
//   "화성",
//   "목성",
//   "토성",
//   "천왕성",
//   "해왕성",
// ];
// 1트
// const answer = prompt("숫자를 입력해주세요");
// if (answer > 8 || answer < 1) {
//   alert("다시 입력해주세요");
//   prompt("숫자를 입력해주세요");
//   console.log(arr[answer - 1]);
// } else {
//   console.log(arr[answer - 1]);
// }

// 오류
// function galaxy() {
//   const answer = prompt("숫자를 입력해주세요");
//   if ((answer > 8 || answer < 1) && typeof answer !== "number") {
//     console.log(typeof answer);
//     // alert("1과 8사이 숫자로 다시 입력해주세요");
//     return galaxy();
//   }
//   console.log(arr[answer - 1]);
// }

// galaxy();

// function galaxy() {
//   const answer = prompt("1부터 8사이의 숫자를 입력해주세요");

//   if (Number(answer) > 8 || Number(answer) < 1) {
//     alert("다시 입력해주세요!");
//     return galaxy();
//   }
//   console.log(arr[answer - 1]);
// }

// galaxy();

// prompt 는 사용자의 입력값을 모두 문자열로 처리해줌
// 1. 숫자로 바꾸고 NaN인지 확인
// NaN == NaN false라서 안됨
// function galaxy() {
//   const answer = prompt("숫자를 입력해주세요");
//   if (Number(answer) == NaN) {
//     return galaxy();
//   } else if (Number(answer) > 8 || Number(answer) < 1) {
//     alert("1-8 사이의 수를 입력해주세요!");
//     return galaxy();
//   }
//   console.log(arr[answer - 1]);
// }

// galaxy();

// 정답
const arr = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];

//1. isNaN
// function galaxy() {
//   const answer = prompt("숫자를 입력해주세요");
//   if (isNaN(Number(answer))) {
//     alert("숫자만 입력이 가능합니다.");
//     return galaxy();
//   } else if (Number(answer) > 8 || Number(answer) < 1) {
//     alert("1-8 사이의 수를 입력해주세요!");
//     return galaxy();
//   }
//   console.log(arr[answer - 1]);
// }

// galaxy();
// 2. 정규식 사용
function galaxy() {
  const regExp = /[1-8]/g;
  const answer = prompt("숫자를 입력해주세요");
  if (!regExp.test(Number(answer))) {
    alert("1-8사이의 숫자만 입력이 가능합니다.");
    return galaxy();
  }
  console.log(arr[answer - 1]);
}

galaxy();
