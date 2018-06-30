import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: 'notfound', component: NotFoundComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
