/*
# 문제 46 : 각 자리수의 합 2

1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 각자리의 숫자를 더하면 21입니다.
*/

function Sum2() {
  let hey = new Array(20);
  return hey
    .fill(1)
    .map((x, i) => x + i)
    .reduce((x, y) => x.toString() + y.toString())
    .split("")
    .reduce((x, y) => parseInt(x) + parseInt(y));
}

Sum2();
