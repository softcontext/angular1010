let txt1 = 'Hello';
let txt2 = "Hello";

console.log(typeof txt1, typeof txt2);

// Template String: 줄 바꿈, 들여쓰기가 유지됩니다.
// ${코드} 표현식을 사용할 수 있습니다.
let txt3 = `
  <div>
    <h1>${txt1}</h1>
  </div>
`;

console.log(typeof txt3);
console.log(txt3);
