/*
# 문제 34: sort 구현하기

민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그ㅜ런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확이한고 싶어한다.

민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)

입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES
*/

function sort(){
    let input = prompt('키를 순서대로 입력해주세요').split(' ');
    let error = false;
    for(let i =0; i<input.length-1; i++){
        if(input[i]>input[i+1]){
            error = !error
            console.log('NO')
            break;
        }
    }

    if(!error){
        console.log('YES')
    }
}

sort();