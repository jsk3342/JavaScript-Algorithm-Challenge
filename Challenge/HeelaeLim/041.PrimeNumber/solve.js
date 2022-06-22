/*
# 문제 41 : 소수판별

숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수)
*/

function primeNumber(){
    let number = prompt('숫자를 입력하세요');
    let result = 'YES';
    for(let i =2; i<number/2; i++){
        if(number%i === 0){
            result = 'NO'
        }
    }
    return result
}

primeNumber()