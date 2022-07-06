/*
# 문제38 : 호준이의 아르바이트

호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
**학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**

```jsx
**입출력**

입력 : 97 86 75 66 55 97 85 97 97 95
출력 : 6
```
*/

// 숫자 sort로 중복없애기
// 오름차순으로 정렬
// 원본 배열에서 해당 0번째, 1번째, 2번째 점수가 몇개 있는지 누적시키기
// 그 값 출력시키기

// 내 풀이
const scoreArr = prompt("학생들의 점수를 입력해주세요")
  .trim()
  .split(" ")
  .sort((a, b) => b - a);
const sortScore = new Set(scoreArr);
let newArr = [];
const three = (function () {
  for (let item of sortScore) {
    newArr.push(item);
    if (newArr.length >= 3) {
      return;
    }
  }
})();
scoreArr.filter((ele) => newArr.includes(ele)).length;

//답안 + trim()추가
const scores = prompt("점수입력")
  .trim()
  .split(" ")
  .map(function (n) {
    return parseInt(n, 10);
  });

scores.sort((a, b) => {
  return a - b;
});

let count = 0;
let arr = [];

while (arr.length < 3) {
  let n = scores.pop();
  if (!arr.includes(n)) {
    arr.push(n);
  }
  count += 1;
}

console.log(count);
