import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // sidebarTgl = true;

  @Input()
  sidebarToggle;


  constructor() { }

  ngOnInit() {
  }

  // sidebarToggle() {
  //   this.sidebarTgl = !this.sidebarTgl;
  // }

}
