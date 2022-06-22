/*
# 문제 37: 반장 선거

새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다. 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

입력 : 원범 원범 혜원 혜원 혜원 혜원 유진 유진
출력 : 혜원(이)가 총 4표로 반장이 되었습니다.
*/

function countVotes(){
    let input = prompt('후보들을 입력하세요').split(' ').sort();
    let result = [];
    for(let i = 0; i< input.length-1; i++){
        if(input[i] != input[i+1]){
            result.push(i+1);
        }
    }
    result.push(input.length);
    let count = [result[0]];
    for(let i =0; i<result.length-1; i++){
        count.push(result[i+1]-result[i]);
    }
    let maxValue = Math.max.apply(null, count);
    let position = count.indexOf(maxValue);
    let pre = 0;
    for(let i =0; i<position; i++){
        pre += count[i];
    }
    console.log(`${input[pre]}(이)가 총 ${maxValue}표로 반장이 되었습니다.`)
}

countVotes()