/*
# 문제 28: 2gram

2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 예를 들어 javascript를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

입력
Javascript

출력
J a
a v
v a
a s
s c
c r
r i
i p
p t

입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해주세요.
*/

function gram_2(){
    let input = prompt('문자열을 입력해주세요').split('');
    for(let i=0; i<input.length-1; i++){
        console.log(`${input[i]} ${input[i+1]}`)
    }
}

gram_2()