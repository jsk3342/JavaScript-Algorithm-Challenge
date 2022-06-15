/*
# 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입력 : 거꾸로
출력 : 로꾸거

*/

//처음 풀이
let input = prompt("문장을 입력하세요")
let inputArray = [...input]
let replaceInputArray = []

for (let i = 0; i < input.length; i++) {
    replaceInputArray.push(inputArray.pop())
}

let result = replaceInputArray.join("")
console.log(result)

//reverse 함수 사용

let inputArray2 = [...prompt("문장을 입력하세요")]
let changeResult = inputArray2.reverse().join("")
console.log(changeResult)