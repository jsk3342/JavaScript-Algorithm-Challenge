/*
# 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입력 : 거꾸로
출력 : 로꾸거

*/
let input = prompt("단어 or 문장을 입력하세요");

document.write(input.split('').reverse().join(''));