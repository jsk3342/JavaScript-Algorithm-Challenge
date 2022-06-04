// # 문제30 : 문자열 속 문자 찾기

// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// **그 문자가 시작하는 index를 반환하는 프로그램**을 만들어 주세요

// ```jsx
// **입력**
// pineapple is yummy
// apple

// **출력**
// 4
// ```

let input = prompt("문자열을 입력하세요");
let word = prompt("찾고싶은 단어를 입력하세요");

document.write(`입력한 문자열 : ${input}<br>`);
document.write(`찾고싶은 단어 : ${word}<br>`);

if (input.indexOf(word) == -1) {
  document.write(`문자열에 포함되지 않은 단어입니다`);
} else {
  document.write(`단어의 시작위치는 인덱스 ${input.indexOf(word)}입니다`);
}