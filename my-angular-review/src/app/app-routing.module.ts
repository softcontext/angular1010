import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', redirectTo: 'a', pathMatch: 'full' },
  { path: 'a', component: AComponent },
  { path: 'b', component: BComponent },
  { path: 'c', component: CComponent },
  { path: 'parent', component: ParentComponent },
  { path: '**', component: CComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
