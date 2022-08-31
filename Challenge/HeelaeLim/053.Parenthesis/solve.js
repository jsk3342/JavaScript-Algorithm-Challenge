/*

# 문제53 : 괄호 문자열

괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 **바른 문자열**, 그렇지 않은 문자열을 **바르지 않은 문자열**이라 부르도록 하자. 

(())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
(해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

**입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**

*/

function DistinctionParenthesis(){
  const input = prompt('괄호 문자열을 입력하세요').split('');
  const small = input.filter((value) => value === "(" || value === ")");
  const medium = input.filter((value) => value === "{" || value === "}");
  const large = input.filter((value) => value === "[" || value === "]");
  if( small.length%2 === 1 || medium.length%2 === 1 || large.length%2 === 1 ){
    return "NO"
  } else {
    if( small[0] === ')' || medium[0] === '}' || large[0] === ']' ){
      return "NO"
    } else if( small.filter((value) => value === ")").length !== small.length/2 || medium.filter((value) => value === "}").length !== medium.length/2 || large.filter((value) => value === "]").length !== large.length/2 ) {
      return "NO"
    } else {
      let left = 0;
      let right = 0;
      for(let i = 0; i<small.length; i++){
        if(small[i] === "("){
          left++;
        } else {
          right++;
        }
        if(right > left){
          return "NO"
        }
      }
      for(let i = 0; i<medium.length; i++){
        if(medium[i] === "{"){
          left++;
        } else {
          right++;
        }
        if(right > left){
          return "NO"
        }
      }
      for(let i = 0; i<large.length; i++){
        if(large[i] === "{"){
          left++;
        } else {
          right++;
        }
        if(right > left){
          return "NO"
        }
      }
      if(right === left){
        return "YES"
      }
    }
  }
}

DistinctionParenthesis();