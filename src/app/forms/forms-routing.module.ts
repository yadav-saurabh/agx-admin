import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ValidationsComponent } from './validations/validations.component';
import { AdvanceComponent } from './advance/advance.component';
import { CustomComponent } from './custom/custom.component';


const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'advance', component: AdvanceComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'validations', component: ValidationsComponent }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FormsRoutingModule { }
