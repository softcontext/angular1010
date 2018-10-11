앵귤러 CLI 도구 설치하기
npm i -g @angular/cli

새 프로젝트 만들기
ng new my-simple-demo

테스트 서버(Webpack) 기동하기
ng serve --open

컴포넌트 파일 생성하기
ng g c home
ng g c about
ng g c books

서비스 파일 생성하기
ng g s service/dataShare

특정 폴더 밑으로 컴포넌트 파일 생성하기
-t : HTML 파일을 따로 만들지 않는다.
-s : CSS 파일을 따로 만들지 않는다.
--spec false : 테스트 용 spec 파일을 만들지 않는다.
ng g c books/bookDetail -t -s --spec false

기타 명령어 옵션 참고
https://github.com/angular/angular-cli/wiki
