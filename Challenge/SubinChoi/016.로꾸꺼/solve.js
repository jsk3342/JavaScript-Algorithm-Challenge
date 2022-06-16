/*
# 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입력 : 거꾸로
출력 : 로꾸거

*/

//구차한 나의 답..
const input = prompt("거꾸로 출력하고 싶은 단어를 입력하세요");

let upsideDown = "";
for (let i = input.length - 1; i >= 0; i--) {
  upsideDown += input[i];
}
console.log(upsideDown);

/*훨씬 깔끔하고 좋은 정답
const reverseString = n.split('').reverse().join('');*/
/*
 * split() 메서드는 문자열을 배열로 만들어 반환하고, << 이 부분을 놓쳤음
 * reverse() 메서드는 배열의 순서를 반전하며,
 * join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
 */
