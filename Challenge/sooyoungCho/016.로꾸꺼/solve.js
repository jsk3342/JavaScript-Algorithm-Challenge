/*
# 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입력 : 거꾸로
출력 : 로꾸거

*/

let txt = prompt('단어를 입력하세요');
let reverse = '';
for(i = 0; i < txt.length; i++){
    reverse = txt[i] + reverse
}

// 메서드 체이닝
console.log(txt.split('').reverse().join(''));