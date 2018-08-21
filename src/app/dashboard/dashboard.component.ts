import { Component, OnInit, Renderer2, AfterViewChecked } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd } from '@angular/router';
import { CommonService } from '../common.service';
import * as NProgress from 'nprogress';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewChecked {

  commonService;

  constructor(private router: Router, private cs: CommonService, private renderer: Renderer2) {
    this.commonService = cs;
    NProgress.configure({ showSpinner: false });
    this.renderer.addClass(document.body, 'preload');
  }

  ngOnInit() {
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
        this.cs.navbarToggleValue = false;
        this.cs.sidebarToggleValue = true;
        window.scrollTo(0, 0);
      }
    });
  }

  ngAfterViewChecked() {
    setTimeout(() => {
      this.renderer.removeClass(document.body, 'preload');
    }, 300);
  }

}
