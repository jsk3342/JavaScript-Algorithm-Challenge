// # 문제1 : 배열의 삭제
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

var nums = [100, 200, 300, 400, 500];
// 풀이 1. slice 사용
const answer1 = nums.slice(0,3);
console.log(answer1);

// 풀이 2. split 사용
var nums = [100, 200, 300, 400, 500];
const answer2 = nums.splice(0,3);
console.log(answer2)

// 풀이 3. pop 사용
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();
console.log(nums);