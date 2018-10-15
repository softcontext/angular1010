ng new my-css-demo --routing=true

# ViewEncapsulation.Emulated
최대한 Shadow DOM과 비슷하게 작동하도록 만드는 기술
모든 브라우저가 아직까지 Shadow DOM을 지원하지 못하므로
Emulated가 기본값으로 설정되어 있습니다.

angular + ionic + cordova ==> iOS, Android 모바일앱을 만들 수 있고
이때는 특정 브라우저를 지정할 수 있으므로 ViewEncapsulation.ShadowDom으로
설정해서 사용할 수 있습니다.

app.component.css
------------------------
```
h3 {
  color: yellow;
}
```

index.html > head
------------------------
```
<style>
h3[_ngcontent-c0] {
  color: yellow;
}
</style>
```
```
<app-root _nghost-c0="" ng-version="6.1.10">
  <h3 _ngcontent-c0="">app.component</h3>
</app-root>
```

# deep

글로벌로 적용

```
/deep/ p {
  color: blue;
  font-weight: bold;
}
```

```
p {
  color: blue;
  font-weight: bold;
}
```

자신과 자식 컴포넌트만 적용

```
:host /deep/ p {
  color: blue;
  font-weight: bold;
}
```

```
[_nghost-c2] p {
  color: blue;
  font-weight: bold;
}
```
