/*
# 문제21 : set은 어떻게 만드나요?

다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript');
4)  var x = new Set(range(5));
5)  var x = new Set();

정답: 3번 5번 set은 중복이 허용되지 않는 자바스크립트 내장객체이다. 
그리고 var x = new Set();과 같은 형태를 지니는데, 값에는 배열이 들어가야한다.
3번 'javascript'는 문자열임으로 유사배열객체이기 때문에 가능한 듯 하다.

*/