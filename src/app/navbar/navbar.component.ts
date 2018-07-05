import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { HostListener } from "@angular/core";
import { CommonService } from '../common.service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  
  previousScroll = 0;
  commonService;
  constructor(private cs:CommonService) {
    this.commonService = cs;
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
  

  hideNavbar = () => {
    setTimeout(() => {
      this.cs.navbarToggleValue = true;
    }, 300);
  }
  
  showNavbar = () => {
    setTimeout(() => {
      this.cs.navbarToggleValue = false;
    }, 300);
  }
  
}
