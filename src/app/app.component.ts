import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd } from '@angular/router';
import * as NProgress from 'nprogress';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // closeSidebar = true;
  pagesRoute = false;
  // hideNavbar;

  constructor(private router: Router,private cs:CommonService) { }

  ngOnInit() {
    this.router.events.subscribe((obj: any) => {
      this.pagesRoute = (!!obj.url && obj.url.includes('/pages')) ? true : false;
      if (obj instanceof RouteConfigLoadStart) {
        NProgress.start();
        NProgress.set(0.4);
      } else if (obj instanceof RouteConfigLoadEnd) {
        NProgress.set(0.9);
        setTimeout(() => {
          NProgress.done();
          NProgress.remove();
        }, 500);
      } else if (obj instanceof NavigationEnd){
        this.cs.navbarToggle = !this.cs.navbarToggle;
        this.cs.sidebarToggle = !this.cs.sidebarToggle;
        // this.cs.sidebarToggle = false;
        // this.closeSidebar = !this.closeSidebar; 
        window.scrollTo(0, 0);
        // this.hideNavbar = !this.hideNavbar;
      }
    });
  }

  // navBarEvent(event) {
  //   this.closeSidebar = event;
  // }

}
