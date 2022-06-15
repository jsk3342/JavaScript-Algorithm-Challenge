/*
# 문제20 : 몫과 나머지

공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.**

**입출력**

입력 : 10 2
출력 : 5 0

답안 const n = prompt('수를 입력하세요.').split(' ');

const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);
*/

function divide() {
    const numbers = prompt('공백으로 구분하여 두 숫자를 입력하세요.').split(' ');
    const 몫 = parseInt(numbers[0] / numbers[1]);
    const 나머지 = numbers[0] % numbers[1];

    return console.log(`몫: ${몫}, 나머지: ${나머지}`);
};