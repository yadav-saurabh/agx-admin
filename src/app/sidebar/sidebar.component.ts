import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarTgl = false;

  constructor() { }

  ngOnInit() {
  }

  sidebarToggle() {
    this.sidebarTgl = !this.sidebarTgl;
  }

}
