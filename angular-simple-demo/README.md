.git : 깃 로컬 리파지토리, 소스 코드 백업

e2e : 종합 테스트 설정파일

node_modules : 디펜던시 설치장소

src : 타입스크립트 코드 저장장소
- app : 개발자 소스코드 배치장소
- assets : 정적리소스 배치폴더
- environments : 개발/배포 모드에 따른 설정파일
- index.html : JS 코드를 브라우저에게 전달할 때 사용
- main.ts : JS 코드의 시작
- polyfills.ts : 폴리필 설정용 파일
- styles.css : index.html 파일에 head 부분에 선언하고자 하는
전체 CSS 설정 파일


폴리필 : ES5에 없던 기능을 동적으로 추가하여 사용하는 방식

트랜스파일링 : 최신문법 코드를 ES5 버전으로 다운그레이드하는 방식

.angular-cli.json : 앵귤러 프로젝트 설정파일

.editorconfig : 아톰 패키지 에디터컨피그 기술의 설정파일

.gitignore : 깃 처리대상 블랙리스트 정보

karma.conf.js : 앵귤러가 지원하는 테스트 런너
자스민을 카르마를 통해서 사용하는 방식입니다.

jasmine : 자바스크립트 테스트 프레임워크

package-lock.json : 버전 충돌 해결을 위한 부가정보

package.json : 노드의 표준 프로젝트 설정정보 파일
추가로 디펜던시 정보를 갖고 있습니다.

protractor.conf.js : 종합 테스트 기술

README.md : 프로젝트 설명서

tsocnfig.json : 타입스크립트 트랜스파일링 설정파일

tslint.json : 린트 환경설정파일
린트는 문법체커가 아니라 스타일 가이드 체커입니다.

브라우저에게 JS 코드를 전달하기 위해서 HTML 파일을 사용합니다.

1. index.html ==> Browser
2. main.bundle.js 기동
 main.ts + app.module.ts + ....


JS 코드의 처리 순서
--------------------------
1. main.ts
전역 처리 코드

2. app.module.ts : 루트 모듈
시작 모듈 설정

3. app.component.ts : 루트 컴포넌트
첫 화면


컴포넌트의 3가지 구성요소
--------------------------
- 변수, 함수를 지원하는 클래스
- 화면구조를 처리하는 HTML
- 디자인을 담당하는 CSS
