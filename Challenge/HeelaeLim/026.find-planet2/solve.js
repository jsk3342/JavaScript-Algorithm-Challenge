/*
# 문제 26: find-planet2

우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

**행성의 한글이름을 입력하면 영어 이름을 반환하는 프로그램**을 만들어 주세요.
*/

function Translate(){
    let Str = prompt();
    if(Str === "수성"){
        console.log("Mercury");
    }else if(Str === "금성"){
        console.log("Venus");
    }else if(Str === "지구"){
        console.log("Earth");
    }else if(Str === "화성"){
        console.log("Mars");
    }else if(Str === "목성"){
        console.log("Jupiter");
    }else if(Str === "토성"){
        console.log("Saturn");
    }else if(Str === "천왕성"){
        console.log("Uranus");
    }else if(Str === "해왕성"){
        console.log("Neptune");
    }else {
        console.log("It is not a solar system planet")
    }
}

Translate();



 