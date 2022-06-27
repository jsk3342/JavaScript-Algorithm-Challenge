/*
# 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입력 : 거꾸로
출력 : 로꾸거

*/

function reverse(text) {
  const reverse = text.split("").reverse().join("");
  return reverse;
}

reverse(prompt("반대로 출력되게 해줄게요."));
