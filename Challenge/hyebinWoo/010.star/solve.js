/*
# 문제10 : 별 찍기

크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 

**은비를 위해 프로그램을 작성해 주세요.**

**입력**


**출력**
    *
   ***
  *****
 *******
*********
*/
const num = prompt("숫자를 입력하세요.");
let star = "";

// for (let i = 1; i <= num; i++) {
//   for (let j = 1; j <= num - i; j++) {
//     star += " ";
//   }
//   for (let z = 1; z <= 2 * i - 1; z++) {
//     star += "*";
//   }
//   star += "\n";
// }
for (let i = 1; i <= num; i++) {
  console.log(" ".repeat(num - i) + "*".repeat(2 * i - 1));
}
// console.log(star);

// function starTree1(num) {
//   let star = "";

//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num - i; j++) {
//       star += " ";
//     }
//     for (let z = 1; z <= 2 * i - 1; z++) {
//       star += "*";
//     }
//     star += "\n";
//   }
//   console.log(star);
// }
// starTree1(5);

// function starTree2(num) {
//   // repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
//   for (let i = 1; i <= num; i++) {
//     console.log(" ".repeat(num - i) + "*".repeat(2 * i - 1));
//   }
// }
// starTree2(5);
