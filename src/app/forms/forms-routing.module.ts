import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsComponent } from './elements/elements.component';
import { ValidationsComponent } from './validations/validations.component';
import { ExamplesComponent } from './examples/examples.component';


const routes: Routes = [
  { path: 'elements', component: ElementsComponent },
  { path: 'validations', component: ValidationsComponent },
  { path: 'examples', component: ExamplesComponent }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FormsRoutingModule { }
