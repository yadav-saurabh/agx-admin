import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})

export class DashboardHomeComponent implements OnInit {

  activitys = [
    { icon: 'edit', head: 'heading', body: 'body' },
    { icon: 'map', head: 'heading', body: 'body' },
    { icon: 'edit', head: 'heading', body: 'body' },
    { icon: 'edit', head: 'heading', body: 'body' },
    { icon: 'map', head: 'heading', body: 'body' },
    { icon: 'map', head: 'heading', body: 'body' }
  ];

  constructor() { }

  ngOnInit() {
    this.calendar();
  }

  private calendar() {
    $('#cal').fullCalendar({
      themeSystem: 'bootstrap4',
      fixedWeekCount: false,
      height: 400,
      header: {
        left: '  ',
        center: ' title ',
        right: 'prev next today'
      },
      buttonText: {
        today: ' '
      }
    });
  }

}
