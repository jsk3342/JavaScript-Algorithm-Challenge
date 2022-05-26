// # 문제2 : 배열의 내장함수

// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.


// 첫번째 방법
const arr1 = [200, 100, 300];
arr1.splice(2, 0, 10000);
console.log(arr1);


// 두번째 방법
const arr2 = [200, 100, 300];
arr2.splice(-1, 0, 10000);
console.log(arr2);


// result : [200, 100, 10000, 300]