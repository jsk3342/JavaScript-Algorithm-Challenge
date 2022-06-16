/*
# 문제21 : set은 어떻게 만드나요?

다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();
*/

// 정답 : 3번, 5번
var x1 = new Set('javascript');
var x2 = new Set();

console.log(x1);
console.log(x2);

// set은 객체 생성자를 이용하여 집합을 생성
// 이 때 배열,맵,집합,문자열 등을 받는다.
// 인자를 넣지않으면 크기가 0인 빈 집합이 생성된다.
