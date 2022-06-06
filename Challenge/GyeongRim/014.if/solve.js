// 나의 답
function 삼육구 (num) {
    let number = num.toString().split('');
    let clap = [];
    for (let i of number) {
        if (i % 3 === 0) {
            clap.push('짝');
        } else {
            clap.push(i);
        }
    }
    return clap;
};

// 답안
const n = prompt('숫자를 입력하세요.');

if (n%3 == 0) { // 나머지 연산 %는 n을 3으로 나누었을때 몫이 아닌 나머지 값을 반환합니다.
    console.log('짝');
} else {
    console.log(n);
}