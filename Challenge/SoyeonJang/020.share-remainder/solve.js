/*
# 문제20 : 몫과 나머지

공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.**

**입출력**

입력 : 10 2
출력 : 5 0
*/

const number = prompt('두 개의 숫자를 입력해 주세요 나누어 드립니다').split(' ').map(Number)

let divide = Math.floor(number[0] / number[1])

let remainder = Math.floor(number[0] % number[1])

console.log(divide, remainder)