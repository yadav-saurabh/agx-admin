import { Component, OnInit, Renderer2, AfterViewChecked } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd } from '@angular/router';
import { CommonService } from '@shared/services/common.service';
import * as NProgress from 'nprogress';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewChecked {

  constructor(private router: Router, public cmnSrv: CommonService, private renderer: Renderer2) {
    NProgress.configure({ showSpinner: false });
    /**
     * to add preload class before loading the APP
     * to prevent transition effection on many element on app startup
     */
    this.renderer.addClass(document.body, 'preload');
  }

  ngOnInit() {
    /**
     * for progres bar (loading) on top; after route chages
     */
    this.router.events.subscribe((obj: any) => {
      if (obj instanceof RouteConfigLoadStart) {
        NProgress.start();
        NProgress.set(0.4);
      } else if (obj instanceof RouteConfigLoadEnd) {
        NProgress.set(0.9);
        setTimeout(() => {
          NProgress.done();
          NProgress.remove();
        }, 500);
      } else if (obj instanceof NavigationEnd) {
        this.cmnSrv.dashboardState.navbarToggle = false;
        this.cmnSrv.dashboardState.sidebarToggle = true;
        window.scrollTo(0, 0);
      }
    });
  }

  ngAfterViewChecked() {
    /**
     * for removing transition effection on load of the page
     */
    setTimeout(() => {
      this.renderer.removeClass(document.body, 'preload');
    }, 300);
  }

}
