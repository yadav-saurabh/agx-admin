import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  navbarToggleValue:boolean;
  sidebarToggleValue:boolean;

  constructor() { 
    this.navbarToggleValue = false;
    this.navbarToggleValue = false;
  }

  sidebarToggle():void {
    this.sidebarToggleValue = !this.sidebarToggleValue;
  }

  navbarToggle():void{
    this.navbarToggleValue = !this.navbarToggleValue;
  }
  
}
