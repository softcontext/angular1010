import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { MyDatePipe } from './pipe/my-date.pipe';
import { MyHighlightDirective } from './directive/my-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipeComponent,
    MyDatePipe,
    MyHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
