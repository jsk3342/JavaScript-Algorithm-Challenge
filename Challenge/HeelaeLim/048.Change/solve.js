/*
# 문제48 : 대소문자 바꿔서 출력하기

문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD

*/

function Change() {
  let String = prompt("문자열을 입력해주세요.").split("");
  for (let i = 0; i < String.length; i++) {
    if (String[i] === String[i].toUpperCase()) {
      String[i] = String[i].toLowerCase();
    } else {
      String[i] = String[i].toUpperCase();
    }
  }
  return String.reduce((a, b) => a + b);
}

Change();
