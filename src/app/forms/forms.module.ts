import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { AdvanceComponent } from './advance/advance.component';
import { ValidationsComponent } from './validations/validations.component';
import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { TagInputModule } from 'ngx-chips';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2FlatpickrModule,
    NgSelectModule,
    TagInputModule
  ],
  declarations: [BasicComponent, AdvanceComponent, ValidationsComponent, CustomComponent]
})
export class FormsLocalModule { }
