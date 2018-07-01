import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  closeSidebar = true;
  pagesRoute = false;
  
  constructor(private router: Router){  }
  
  ngOnInit() {
    this.router.events.subscribe((obj:any)=>{
      this.pagesRoute = (!!obj.url && obj.url.includes('/pages'))?true:false;
    });
  }
  
  navBarEvent(event) {
    this.closeSidebar = event;
  }

}
