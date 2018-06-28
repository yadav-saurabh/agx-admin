import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsComponent } from './elements/elements.component';
import { ExamplesComponent } from './examples/examples.component';
import { ValidationsComponent } from './validations/validations.component';
import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ElementsComponent, ExamplesComponent, ValidationsComponent]
})
export class FormsLocalModule { }
