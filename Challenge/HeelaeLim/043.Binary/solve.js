/*
# 문제 43 : 10진수를 2진수로

우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
이를 컴퓨터가 알아들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

예를 들어 13은 2^3 + 2^2 + 2^0 = 13 이기 때문에 1101로 표현합니다.

**사용자에게 숫자를 입력받고 이를 2진수로 바꾸고 그 값을 출력해주세요.**
*/

function Binary() {
  let number = prompt("숫자를 입력하세요");
  return parseInt(number).toString(2);
}

Binary();
