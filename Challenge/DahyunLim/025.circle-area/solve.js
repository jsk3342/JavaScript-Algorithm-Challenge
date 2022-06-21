// # 문제 25: 원의 넓이를 구하세요

// 원의 넓이는 `반지름의 길이 x 반지름의 길이 x 3.14`로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

// **입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수**를 만들어 주세요.

function circleArea(r){
    return Math.pow(r,2)*3.14;
}

circleArea(2);
 
//prompt로 입력받는 경우


/* 궁금증 : function 안에서 console.log와 return의 차이점은 뭘까?

console.log(x)는 내장함수, return은 제어문

예시)
function circleArea(r){
    return Math.pow(r,2)*3.14;
}

function circleArea(r){
    console.log(Math.pow(r,2)*3.14);
}

콘솔을 찍어주는 기능만하는 것, 반환값이 없기 때문에 변수에 담아 변수를 찍어보면 undefined로 나온다는게 차이
그냥 계산만해주고 다른 값을 반환해주지 않아도 된다면 return을 사용해줄 필요 없고, 어떤 계산을 통해 그 값을 사용하려면 return을 해주고 상황에 맞게 return을 사용
return을 사용하면 함수가 빠져나가기 때문에 뒤에 오는 것들을 실행하지 않는다!
*/