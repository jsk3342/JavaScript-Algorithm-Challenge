// # 문제28 : 2-gram

// **2-gram**이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.

// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// **입력**
// Javascript

// **출력**
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

// 입력으로 문자열이 주어지면 **2-gram**으로 출력하는 프로그램을 작성해 주세요.
// let str = "";
// const arr = prompt("문자를 입력해주세요.").split("");
// for (let i = 0; i < arr.length - 1; i++) {
//   for (j = i; j < i + 1; j++) {
//     str += `${arr[i]} ${arr[i + 1]}`;
//   }
//   str += "\n";
// }
// console.log(str);

let str = "";
const arr = prompt("문자를 입력해주세요.").split("");
for (let i = 0; i < arr.length - 1; i++) {
  str += `${arr[i]} ${arr[i + 1]}`;
  str += "\n";
}
console.log(str);
