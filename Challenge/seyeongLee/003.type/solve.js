// # 문제3 : 변수의 타입

// 다음 출력 값으로 올바른 것은?

var arr = [100, 200, 300];
console.log(typeof (arr));

// 1)  undefined
// 2)  string
// 3)  number
// 4)  object  -----> 정답!!
// why? 배열은 원사자료형이 아닌 객체자료형에 속하기 때문에 객체처럼 동작. 즉 배열은 'object'의 특수한 한 형태.
// 그러므로 typeof(배열)의 결과는 object


// 어떠한 데이터가 배열인지 아닌지 정확히 확인하기 위해서 'isArray()' 함수를 사용.
// 배열이면 true 아니면 false를 반환
console.log(Array.isArray(arr)); // result : true