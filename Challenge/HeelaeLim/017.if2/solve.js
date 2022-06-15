/*
# 문제17 : 놀이기구 키 제한

유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
유주가 담당하는 놀이기구는 키가 150cm이상만 탈 수 있습니다.

입력으로 키가 주어지면 키가 150이 넘을 때 YES 아닐 때 NO를 출력하는 프로그램을 만드세요

```jsx
**입출력**

입력 : 152
출력 : YES

입력 : 147
출력 : NO
```
*/

function Check(){
    let Num = prompt();
    if(!isNaN(Num)){
        if(Num >= 150){
            console.log("YES")
        }
        else{
            console.log("NO")
        }
    }
    else{
        console.log("Please enter your key.(only Number!)")
    }
}

Check();

