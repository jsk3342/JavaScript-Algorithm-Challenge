//# 문제6 : False

// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

// 1)  NaN
// 2)  1   -----> 정답!! why? 0외의 숫자는 전부 true
// 3)  ""
// 4)  0
// 5)  undefined


console.log(!!NaN); // result : false
console.log(!!1); // result : true
console.log(!!""); // result : false
console.log(!!0); // result : false
console.log(!!undefined); // result : false