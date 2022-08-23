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
const member = prompt("반장이 될 이름을 입력해주세요.").split(" ");
let result = {};
let winner = "";
for (let index in member) {
    let val = member[index];
    result[val] =
        result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

for (let i = 0; i < Object.keys(result).length; i++) {
    if (result[Object.keys(result)[i]] > result[Object.keys(result)[i + 1]]) {
        winner = Object.keys(result)[i];
    }
}
console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
