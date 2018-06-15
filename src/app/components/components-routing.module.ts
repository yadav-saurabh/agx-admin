import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { GridsComponent } from './grids/grids.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { PanelsComponent } from './panels/panels.component';


const routes: Routes = [
  { path: 'alerts', component: AlertsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'grids', component: GridsComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'panels', component: PanelsComponent },
  { path: 'typography', component: TypographyComponent }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ComponentsRoutingModule { }
