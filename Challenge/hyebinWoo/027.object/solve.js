// # 문제27 : 객체 만들기

// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해주세요.

//  **입력**
//  Yujin Hyewon
// 70 100

//  **출력**
// {'Yujin': 70, 'Hyewon': 100}
const name = prompt("학생의 이름을 입력해주세요.").split(" ");
const score = prompt("수학점수를 입력해주세요.").split(" ");

const obj = new Object();

for (let i = 0; i < name.length; i++) {
    obj[name[i]] = parseInt(score[i]);
}
console.log(obj);
