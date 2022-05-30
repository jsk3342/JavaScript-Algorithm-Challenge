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

// 첫번째 방법 : 웹브라우저
const input = prompt("줄(행)의 갯수를 입력하세요");

for (let i = 0; i < input; i++) {
  let result = '';
  for (let j = 0; j < input - i - 1; j++) {
    result += ' ';
  }
  for (let k = 0; k < (2 * i + 1); k++) {
    result += '*';
  }
  console.log(result);
}


// 두번째 방법 : node.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("줄(행)의 갯수를 입력하세요 : ", (input) => {

  for (let i = 0; i < input; i++) {
    let result = '';
    for (let j = 0; j < input - i - 1; j++) {
      result += ' ';
    }
    for (let k = 0; k < (2 * i + 1); k++) {
      result += '*';
    }
    console.log(result);
  }

  rl.close();
});

rl.on('close', () => {
  process.exit();
})

// 위와 같이 대표적인 런타임 환경(웹브라우저, node.js)에 따라 2가지 방식으로 문제를 풀이할 수 있습니다.
// 웹브라우저와 node.js는 값을 입력받는 코드가 다르지만
// 그 외 문제 풀이법은 동일하기 때문에 앞으로는 웹브라우저 방식으로만 올리겠습니다.