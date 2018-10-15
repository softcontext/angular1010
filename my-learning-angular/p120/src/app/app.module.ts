import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgifComponent } from './ngif/ngif.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { RefComponent } from './ref/ref.component';

@NgModule({
  declarations: [
    AppComponent,
    NgclassComponent,
    NgifComponent,
    CheckBoxComponent,
    RefComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
