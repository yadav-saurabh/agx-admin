import { Component, OnInit, Renderer2, AfterViewChecked } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd } from '@angular/router';
import * as NProgress from 'nprogress';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {

  pagesComponentRoute = false;
  commonService;

  constructor(private router: Router,private cs:CommonService, private renderer: Renderer2) { 
    this.commonService = cs;
    NProgress.configure({ showSpinner: false });
    this.renderer.addClass(document.body, 'preload');
  }
  
  ngOnInit() {
    this.router.events.subscribe((obj: any) => {
      if(!!obj.url) {
        this.pagesComponentRoute = obj.url.includes('/pages');
      }
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
