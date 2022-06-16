/*
# 문제8 : 객체의 키 이름 중복

자바스크립트 객체를 다음과 같이 만들었다. 
출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']); -----> 정답 : 84
*/

var d = {
    'height': 180,
    'weight': 78,
    'weight': 84,
    'temperature': 36,
    'eyesight': 1
};

console.log(d['weight']); // result : 84
console.log(d.weight); // result : 84
// 객체이름[key] or 객체이름.key는 해당 key에 대응하는 value를 반환한다.