// # 문제23: OX문제

// `console.log(10/3)`의 출력 결과는 ** 3 ** 이다.

// 정답: X / 자바스크립트 부동소수점 오류: 보통 계산을 할 때 '10진법'을 사용하지만, 
//우리와 다르게 컴퓨터는 계산을 할 때 0과 1만 사용하는 '2진법'을 사용한다. 
//그래서 10진법을 2진법으로 바꾸는 변환과정이 필요한데, 소수 중 일부는 이 과정에서 무한소수가 되어버린다. 
//하지만 컴퓨터 메모리에는 한계가 있어서 무한 소수를 다 담지 못하고 중간에 잘라서 유한 소수로 저장해버린다. 
//바로 이 과정에서 미세한 오차가 발생한다.