import {a} from './service';
// 노드 컴파일러 왈:
// SyntaxError: Unexpected token import
// 나는 import 문자열이 무엇인지 모른다.
// 해결책:
// ECMA 문법을 노드가 이해하는 문법으로 변경해야 한다.
// 바벨을 통해 트랜스파일링을 하고 그 결과를 실행한다.
// 1. 콘솔에서 개발자가 직접 작업
// 2. 에디터에 기능을 추가하고 에디터에게 위임
// 3. 앵귤러 CLI 도구를 이용

console.log(a);
