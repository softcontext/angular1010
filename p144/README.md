새 프로젝트 만들기
--routing=true : 라우팅정보를 분리한 파일 1개를 추가로 만든다.
ng new p144 --routing=true

결과
app-routing.module.ts


컴포넌트 만들기
ng g c built-in-pipe


커스텀 파이프 만들기
ng g p pipe/my-date

커스텀 디렉티브 만들기
ng g d directive/my-highlight --spec false
