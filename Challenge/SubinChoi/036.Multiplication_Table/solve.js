/*
# 문제36 : 구구단 출력하기

1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

```jsx
**입출력**

입력 : 2
출력 : 2 4 6 8 10 12 14 16 18
```
*/

// 첫번째 풀이
// const times = prompt("1~9까지의 숫자 중 하나를 입력해주세요");
// function timesTable(times) {
//   const arr = [];
//   for (let i = 1; i <= 9; i++) {
//     arr.push(times * i);
//   }
//   const answer = arr.join(" ");
//   console.log(answer);
// }
// timesTable(times);

const num = prompt("1 ~ 9까지의 숫자 중 하나를 입력하세요.");
let result = "";

for (let i = 1; i <= 9; i++) {
  result += i * num + " ";
}
//문자열로 더해주는게 더 심플하고 좋은 것 같다
console.log(result);
