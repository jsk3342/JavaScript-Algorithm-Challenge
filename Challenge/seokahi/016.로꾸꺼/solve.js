/*
# 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입력 : 거꾸로
출력 : 로꾸거

*/

let input = prompt("입력해주세요.");
let result="";
for(let i =input.length-1;i>=0;i--) {
    result += input[i];
}
console.log(result);