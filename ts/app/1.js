// TypeScript by Microsoft
// 자바스크립트 코드를 자료형을 명시해서 사용하는 기술
// 변수명: 자료형
var burger = 'hamburger', // String
calories = 300, // Numeric
tasty = true; // Boolean
// Alternatively, you can omit the type declaration:
// var burger = 'hamburger';
// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
// 함수를 개발하는 개발자가 자료형을 명시하면 함수를 사용하는 개발자가
// 혜택을 받는다.
speak(burger, calories);
//# sourceMappingURL=1.js.map