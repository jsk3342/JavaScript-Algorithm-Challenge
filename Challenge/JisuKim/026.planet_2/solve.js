// 문제26 : 행성 문제2

// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.


const planet = {
  수성: "Mercury",
  금성: "Venus",
  지구: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune"
}

const callPlanet = prompt("뭐 할껀데?")

function translationEngToKor(callPlanet) {
  console.log(planet[callPlanet])
}

translationEngToKor(callPlanet)
//마침표 연산자로는 접근 불가능 하다. 무조건 planet.토성 이렇게 프로퍼티 키로 접근해야 한다.