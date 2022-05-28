/*
# 문제9 : concat을 활용한 출력 방법

다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

**데이터**
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';
// concat은 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열로 반환한다. 배열이 아니면 인수 를 붙여서 반환한다.
var result = year.concat('/',month,'/',day,' ',hour,':',minute,':',second);

console.log(result);

**출력**
2019/04/26 11:34:27
*/