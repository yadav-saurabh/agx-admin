import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChartsComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartsComponent]
})
export class ChartsModule { }
