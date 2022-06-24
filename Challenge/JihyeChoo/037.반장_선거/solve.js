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
const data = prompt('이름을 입력해주세요.').split(' ');
const setData =new Set(data);
const objData={};
let winner='';

setData.forEach((name)=>{
    objData[name]=data.filter((x)=>x===name).length;
});

winner = Object.keys(objData).reduce(function(a, b){
    return objData[a] > objData[b] ? a : b
});