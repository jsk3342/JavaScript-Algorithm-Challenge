// 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

let input = prompt("a의 b승 -> 원하는 a와 b 값을 입력하세요").split(" ");

// +를 넣어줌으로서 문자열을 숫자형으로 변환
// +없어도 계산에 문제는 없음
let a = +input[0];
let b = +input[1];

document.write(`${a}의 ${b}승 = ${a ** b}`);