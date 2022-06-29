/*
# 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입력 : 거꾸로
출력 : 로꾸거

*/

const input = prompt("여기에 입력해주세요.");
const arr = input.split("");
arr.reverse();
arr.join("");
