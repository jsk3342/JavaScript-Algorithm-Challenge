/*
# 문제37 : 반장 선거

새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

```jsx
**입력**
원범 원범 혜원 혜원 혜원 혜원 유진 유진

**출력**
혜원(이)가 총 4표로 반장이 되었습니다.
```
*/
let input = prompt("반장이 되길 원하는 학생의 이름을 입력하세요").split(' ');
let nameArr = [];

for (const key in input) {
  const name = input[key];
  if (nameArr[name] === undefined) {
    nameArr[name] = 1;
  } else {
    nameArr[name]++;
  }
}

const winner = Object.keys(nameArr).reduce((a, b) => {
  if (nameArr[a] > nameArr[b]) {
    return a;
  } else {
    return b;
  }
})

document.write(`${winner}(이)가 총 ${nameArr[winner]}표로 반장이 되었습니다.`);