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




// var str = "pineapple is yummy"
// var find = "apple"

// function solution(string, find) {
//   //스트링의 문자열을 다 돌면서, find의 문자가 일치하는지 체크하고 있으면 index를 반환한다
//   var newStr = string.split("")
//   var newFind = find.split("")
//   var answer = [];
//   //   newStr.forEach(element => {
//   //   console.log(element)
//   // });
//   for (const value in newStr) {
//     for (const match in newFind) {
//       console.log("newStr[value]",newStr[value])
//       console.log("newFind[match]",newStr[value])
//       if(newStr[value] === newFind[match]) answer.push(value);
//     }
//   }
//   return answer
// }

// solution(str, find);
const word = "pineapple is yummy"
const keyword = "apple"


console.log(word.indexOf(keyword))