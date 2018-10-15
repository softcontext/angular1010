컴포넌트 사이에 대화방법(데이터를 주고 받는 방법)

1. 같은 router-outlet 영역을 교대로 차지하는 경우
A ====> B

A ==> Service 에게 데이터를 전달하여 보존
B ==> Service 로부터 데이터를 찾아가서 사용

2. 컴포넌트가 중첩되어 사용되는 경우
Parent ==<child [key]="value">==> Child # @Input key
Child ==@Output key.emit(value)==> Parent # <child (key)="parentFn($event)">

3. 대화하는 두 컴포넌트가 모두 화면에 표시되어 있는 경우
비동기 기술을 통해 대화합니다.
RxJS : Subject - Observable (Publisher - Subscriber)

A ==데이터==> B : 직접 전달은 불가능하다.
A, B를 포함하는 부모 컴포넌트를 통해서 간접적으로 전달할 수 있으나 권장하지 않느다.

추천방법
B ==> Subject 에게 Observable 객체를 받아서 cb함수를 등록한다.
A ==> Subject 에게 데이터를 전달하면서 이벤트를 방출해달라고 요청한다.
  ==> B 가 미리 등록한 cb함수를 호출하면서 A가 전달한 데이터가 넘어간다.
