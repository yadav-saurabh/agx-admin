import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {

  ngOnInit() {
    this.monthCal();
    this.weekCal();
    this.eventCal();
  }

  private eventCal() {
    $('#calendar').fullCalendar({
      themeSystem: 'bootstrap4',
      defaultView: $(window).width() < 765 ? 'listWeek' : 'month',
      height: 650,
      fixedWeekCount: false,
      header: {
        left: ' ',
        center: 'title  ',
        right: 'prev next today'
      },
      footer: {
        center: 'month,agendaWeek,agendaDay,listWeek'
      },
      titleFormat: 'MMM YYYY',
      buttonText: {
        today: ' '
      },
      defaultDate: '2016-08-06',
      editable: true,
      eventLimit: true,
      events: [
        { title: 'All Day Event', start: '2016-08-01' },
        { title: 'Long Event', start: '2016-08-07', end: '2016-08-10' },
        { id: 999, title: 'Repeating Event', start: '2016-08-09T16:00:00' },
        { id: 999, title: 'Repeating Event', start: '2016-08-16T16:00:00' },
        { title: 'Conference', start: '2016-08-05', end: '2016-08-07' },
        { title: 'Meeting', start: '2016-08-06T10:30:00', end: '2016-08-06T12:30:00' },
        { title: 'Lunch', start: '2016-08-06T12:00:00' },
        { title: 'Meeting', start: '2016-08-06T14:30:00' },
        { title: 'Happy Hour', start: '2016-08-06T17:30:00' },
        { title: 'Dinner', start: '2016-08-06T20:00:00' },
        { title: 'Movie', start: '2016-08-07T07:00:00' },
        { title: 'Click for Google', url: 'https://google.com/', start: '2016-08-28' }
      ]
    });
  }

  private weekCal() {
    $('#calendar-week').fullCalendar({
      defaultView: 'basicWeek',
      themeSystem: 'bootstrap4',
      height: 410,
      allDaySlot: false,
      fixedWeekCount: false,
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

  private monthCal() {
    $('#calendar-month').fullCalendar({
      themeSystem: 'bootstrap4',
      height: 410,
      allDaySlot: false,
      fixedWeekCount: false,
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
