// # 문제4 : 변수의 타입2

// 다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

// 1)  입력 : a =1,   출력 : number
// 2)  입력 : a = 2.22,   출력 : boolean   -----> 정답!! why? 실수도 number이기 때문
// 3)  입력 : a = 'p',   출력 : string
// 4)  입력 : a = [1, 2, 3],   출력 : object


const input1 = 1;
const input2 = 2.22;
const input3 = 'p';
const input4 = [1, 2, 3];
console.log(typeof (input1)); // result : number 
console.log(typeof (input2)); // result : number
console.log(typeof (input3)); // result : string
console.log(typeof (input4)); // result : object