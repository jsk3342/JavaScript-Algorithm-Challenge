// 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

let input = prompt("제곱 할 두 숫자를 써주세요 ( 숫자는 공백으로 구분해주세요)").split(" ")

let a = input[0]
let b = input[1]

console.log(`${a}의 ${b}승은 ${a ** b}입니다.`)