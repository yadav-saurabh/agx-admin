import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { GridsComponent } from './grids/grids.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { AlertsComponent } from './alerts/alerts.component';
import { PanelsComponent } from './panels/panels.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ButtonsComponent, GridsComponent, NotificationsComponent, IconsComponent, TypographyComponent, AlertsComponent, PanelsComponent]
})
export class ComponentsModule { }
