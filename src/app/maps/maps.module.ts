import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: MapsComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MapsComponent]
})
export class MapsModule { }
