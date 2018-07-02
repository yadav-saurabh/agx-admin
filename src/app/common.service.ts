import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  navbarToggle:boolean;
  sidebarToggle:boolean;

  constructor() { 
    this.sidebarToggle = false;
    this.navbarToggle = false;
  }
  
}
