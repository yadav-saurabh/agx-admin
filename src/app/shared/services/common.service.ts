import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  dashboardState =  {
    navbarToggle: false,
    sidebarToggle: true,
    sidebarMiniToggle: false
  };

  sidebarToggle(): void {
    this.dashboardState.sidebarToggle = !this.dashboardState.sidebarToggle;
  }

  sidebarMiniToggle(): void {
    this.dashboardState.sidebarMiniToggle = !this.dashboardState.sidebarMiniToggle;
  }

  navbarToggle(): void {
    this.dashboardState.navbarToggle = !this.dashboardState.navbarToggle;
  }

}
