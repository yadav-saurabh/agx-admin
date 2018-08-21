import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';


const routes: Routes = [
  { path: '', component: MapsComponent }
];


@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'your-api-key'
    }),
    RouterModule.forChild(routes)
  ],
  declarations: [MapsComponent]
})
export class MapsModule { }
