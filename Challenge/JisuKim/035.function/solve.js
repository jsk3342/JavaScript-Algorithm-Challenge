/*
# 문제35 : Factory 함수 사용하기

2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 

<pass>에 코드를 작성하여 two함수를 완성하세요.

```jsx
function one(n){
    function two(){
        //pass
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
```
*/

function one(n){
    
    function two(value){
        return value**n;
    }
    return two
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));