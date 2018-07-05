import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ValidationsComponent } from './validations/validations.component';
import { AdvanceComponent } from './advance/advance.component';


const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'validations', component: ValidationsComponent },
  { path: 'advance', component: AdvanceComponent }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FormsRoutingModule { }
