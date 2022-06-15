// # 문제33 : 거꾸로 출력하기

// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// ```jsx
// **입출력**
// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// **출력**
// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2
// ```

let input = prompt("숫자를 여러개 입력하세요").split(" ");
let output = [];

for (i = input.length; i > 0; i--) {
  output.push(input[i - 1]);
}

document.write(`${input.join(" ")}<br>`);
document.write(`${output.join(" ")}`);