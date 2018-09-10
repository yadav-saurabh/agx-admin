import { Component, HostListener } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  previousScroll = 0;
  constructor( public commonService: CommonService) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 60 && currentScroll < document.documentElement.scrollHeight - window.innerHeight) {
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
      this.commonService.navbarToggleValue = true;
    }, 100);
  }

  showNavbar = () => {
    setTimeout(() => {
      this.commonService.navbarToggleValue = false;
    }, 100);
  }

}
