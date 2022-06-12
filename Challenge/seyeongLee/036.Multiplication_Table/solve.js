/*
# 문제36 : 구구단 출력하기

1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

```jsx
**입출력**

입력 : 2
출력 : 2 4 6 8 10 12 14 16 18
```
*/

let input = prompt("원하는 구구단의 단을 입력하세요");

function multiplicationTable(input) {
  let result = '';

  for (let i = 1; i < 10; i++) {
    result += input * i + ' ';
  }
  return result;
}

document.write(`${input}단 결과 : ${multiplicationTable(input)}`);