import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { HostListener } from "@angular/core";

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnChanges{
  
  sidebarToggler = true;
  previousScroll = 0;
  @Input()
  navbarToggle;
  @Output()
  emitEvent = new EventEmitter();
  
  constructor() {
    this.navbarToggle = false;
   }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event) {
    let currentScroll = window.pageYOffset;
    if (currentScroll > 60 && currentScroll < $(document).height() - $(window).height()) {
      if (currentScroll > this.previousScroll) {
        this.hideNavbar();
      } else {
        this.showNavbar();
      }
      this.previousScroll = currentScroll;
    }
  }
  
  ngOnChanges(){
    this.navbarToggle = false;
  }

  hideNavbar = () => {
    setTimeout(() => {
      this.navbarToggle = true;
    }, 300);
  }
  
  showNavbar = () => {
    setTimeout(() => {
      this.navbarToggle = false;
    }, 300);
  }

  toggleSidebar() {
    this.sidebarToggler = !this.sidebarToggler;
    this.emitEvent.emit(this.sidebarToggler);
  }

}
