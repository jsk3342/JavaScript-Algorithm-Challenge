// # 문제1 : 배열의 삭제
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

var nums = [100, 200, 300, 400, 500];

// 첫번째 방법

nums.splice(3);

// 두번째 방법

let newNums = nums.reduce((newNums, num) => {
    if (num !== 400 && num !== 500) {
        newNums.push(num);
    }
    return newNums;
}, []);

// 세번째 방법

nums.filter((num) => {
    if (num !== 400 && num !== 500) {
        return num;
    }
});

// 네번째 방법

let newNums2 = [];

for (num of nums) {
    if (num !== 400 && num !== 500) {
        newNums2.push(num);
    }
}

// 다섯번째 방법

for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] === 400 || nums[i] === 500) {
        nums.splice(i, 1);
    }
}
