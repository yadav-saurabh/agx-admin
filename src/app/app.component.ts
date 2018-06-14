import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  closeSidebar = true;
  
  navBarEvent(event) {
    this.closeSidebar = event;
  }

}
