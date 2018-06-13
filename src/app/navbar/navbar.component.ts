import { Component, Output, EventEmitter } from '@angular/core';
import { HostListener } from "@angular/core";

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  navbarHidden = false;
  sidebarToggler = true;
  previousScroll = 0;

  @Output()
  emitEvent = new EventEmitter();

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event) {
    let currentScroll = window.pageYOffset;
    if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
      if (currentScroll > this.previousScroll) {
        this.hideNavbar();
      } else {
        this.showNavbar();
      }
      this.previousScroll = currentScroll;
    }
  }

  hideNavbar = () => {
    setTimeout(() => {
      this.navbarHidden = true;
    }, 300);
  }

  showNavbar = () => {
    setTimeout(() => {
      this.navbarHidden = false;
    }, 300);
  }


  constructor() { }

  toggleSidebar() {
    this.sidebarToggler = !this.sidebarToggler;
    this.emitEvent.emit(this.sidebarToggler);
  }

}
