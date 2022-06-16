/*
# 문제20 : 몫과 나머지

공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.**

**입출력**

입력 : 10 2
출력 : 5 0
*/

let input = prompt("a 나누기 b -> 원하는 a와 b값을 입력하세요").split(" ");

let a = input[0];
let b = input[1];

document.write(`a = ${a}, b = ${b} <br>`);
document.write(`몫 = ${Math.floor(a / b)}, 나머지 = ${a % b}`);