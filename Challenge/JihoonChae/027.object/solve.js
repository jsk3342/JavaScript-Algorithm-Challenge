// # 문제27 : 객체 만들기

// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해주세요.


//  **입력**
//  Yujin Hyewon
// 70 100

//  **출력**
// {'Yujin': 70, 'Hyewon': 100}

const name = prompt('당신의 이름은?').split(' ') // 키 값이 들어가는 변수
const score = prompt('당신의 점수는?').split(' ') // 값들을 넣어주는 변수  
const obj = {}

for(i=0; i<name.length; i++) { // 입력값들을 객체에 넣어주는 과정 
  obj[name[i]] = parseInt(score[i]) // 이름1에 점수1을 각각 키와 밸류로 설정해주기 
}
console.log(obj);