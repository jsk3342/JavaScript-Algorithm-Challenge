// 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

const number = prompt('두 개의 숫자를 입력해 주세요!').split(' ').map(Number)

const result = Math.pow(number[0], number[1])

alert(`${number[0]}의 ${number[1]}승은 ${result}입니다.`)