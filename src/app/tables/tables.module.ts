import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';

const routes: Routes = [
  { path: '', component: TablesComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablesComponent]
})
export class TablesModule { }
