/*
# 문제16 : 로꾸꺼

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

```jsx
**입출력**

입력 : 거꾸로
출력 : 로꾸거
```
*/

function Upsidedown(){
    let Str = prompt();
    console.log(`${Str.split('').reverse().join('')}`)
}

Upsidedown();
