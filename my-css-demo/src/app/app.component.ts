import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.Native
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'my-css-demo';
}
