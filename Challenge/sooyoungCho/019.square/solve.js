// 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

const num = prompt('두 숫자를 입력하세요').trim().split(' ');
let num1 = Number(num[0]);
let num2 = Number(num[1]);

let multiply = num1 * num2;
console.log(multiply);
