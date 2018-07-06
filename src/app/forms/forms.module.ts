import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { AdvanceComponent } from './advance/advance.component';
import { ValidationsComponent } from './validations/validations.component';
import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2FlatpickrModule
  ],
  declarations: [BasicComponent, AdvanceComponent, ValidationsComponent]
})
export class FormsLocalModule { }
