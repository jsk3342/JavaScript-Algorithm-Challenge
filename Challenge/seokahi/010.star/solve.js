/*
# 문제10 : 별 찍기

크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 

**은비를 위해 프로그램을 작성해 주세요.**

**입력**
5

**출력**
    *
   ***
  *****
 *******
*********
*/

// 입력받은 값
// 1. 바로 출력
let input_value = 5;
for(let i = 0; i< input_value; i++) {
    for(let j = 0; j< input_value - i ; j++) {
        process.stdout.write(" ");
    }
    for(let j = 0; j< i*2 +1 ;j++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}

// 2. 값 저장 후 한번에 출력
let output = "";
for(let i = 0; i< input_value; i++) {
    for(let j = 0; j< input_value - i ; j++) {
        output += " ";
    }
    for(let j = 0; j< i*2 +1 ;j++) {
        output += "*";
    }
    output += "\n";
}
console.log(output);