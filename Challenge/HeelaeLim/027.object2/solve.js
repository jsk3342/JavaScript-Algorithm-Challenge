/*
# 문제 27: 객체 만들기

첫 번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두 번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해 주세요.
*/

function Mathscore(){
    let input_name = prompt('이름을 입력해 주세요').split(' ');
    let input_score = prompt('수학 점수를 입력해 주세요').split(' ');
    let student_score = new Object;
    for(let i=0; i<input_name.length; i++){
        student_score[input_name[i]] = parseInt(input_score[i]);
    }
    console.log(student_score)
}

Mathscore(); 