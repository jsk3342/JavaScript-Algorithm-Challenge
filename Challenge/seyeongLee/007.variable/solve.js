/*
# 문제7 : 변수명

다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

1)  age
2)  Age
3)  let    -----> 정답!!
4)  _age
5)  1age   -----> 정답!!
*/

const age = 20;
const Age = 20;
const let = 20; // error : 예약어는 변수명으로 쓸 수 없다.
const _age = 20;
const 1age = 20; // error : 숫자는 변수명의 맨 앞에 쓸 수 없다.