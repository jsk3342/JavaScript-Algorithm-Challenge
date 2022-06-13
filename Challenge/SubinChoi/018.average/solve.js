/*
# 문제18 : 평균 점수

영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
단, 소숫점 자리는 모두 버립니다.

**입출력**

입력 : 20 30 40
출력 : 30

*/

const input = prompt("국어 수학 영어의 점수를 한번에 입력해주세요");
const sum = input
  .split(" ")
  .map((ele) => Number(ele))
  .reduce((acc, cur) => (acc += cur), 0);
console.log((sum / 3).toFixed());
