새 프로젝트 만들기
ng new p166 --routing=true

Root Module은 일반적으로 그대로 사용합니다.



새 모듈 만들기

항상 사용하는 기능
ng g m core --routing=true

특정 화면과 관련된 기능
ng g m member --routing=true

다수의 모듈이 공통적으로 사용하는 기능(유틸리티)
ng g m share --routing=true


모듈별로 컴포넌트 만들기
ng g c core/header -t -s --spec false
ng g c core/footer -t -s --spec false

ng g c member/signup -t -s --spec false
ng g c member/login -t -s --spec false

ng g c home
ng g c not-found

공유모듈에 공유기능 추가하기
ng g p share/pipe/reverse --spec false
ng g s share/service/data-share --spec false

테스트 빌드하기
ng build

빌드된 결과 확인하기
ng i -g http-server

배포파일 index.html인 존재하는 폴더> http-server

~.map : 브라우저 테스트 시 발생하는 에러 위치를
실제 .ts 파일에 위치로 바꾸어 주는 용도의 파일

서비스(배포) 빌드하기
ng build --prod
