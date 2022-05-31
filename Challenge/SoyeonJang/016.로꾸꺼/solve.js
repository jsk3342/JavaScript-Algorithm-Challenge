/*
# 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입력 : 거꾸로
출력 : 로꾸거

*/

const sentence = prompt('문장을 입력해 주세요!\n거꾸로 바꾸어 드립니다')

// 1. 메서드 체이닝
console.log(sentence.split('').reverse().join(''))

// 2. 함수 호출
function reverse(str) {
  let reverse = str.split('').reverse().join('')
  return reverse
}

console.log(reverse(`${sentence}`))