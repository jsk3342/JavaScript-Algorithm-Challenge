/*
# 문제41 : 소수판별

숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
*/


let num = Math.floor((Math.random()*9) + 1)

function solution(n) {
  for(let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log('no')
      return false
    }
  } 
  if (n === 1){
    console.log('no')
    return false
  }
  console.log('yes')
}

solution(num);