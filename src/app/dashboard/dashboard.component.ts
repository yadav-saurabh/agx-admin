import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Chart from 'chart.js'
import 'fullcalendar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  activitys = [
    { icon: 'edit', head: 'heading', body: 'body' },
    { icon: 'map', head: 'heading', body: 'body' },
    { icon: 'edit', head: 'heading', body: 'body' },
    { icon: 'edit', head: 'heading', body: 'body' },
    { icon: 'map', head: 'heading', body: 'body' },
    { icon: 'map', head: 'heading', body: 'body' }
  ];

  tasks = [
    { check: true, text: 'task 1' },
    { check: false, text: 'task 2' },
    { check: true, text: 'task 3' },
    { check: true, text: 'task 4' },
    { check: false, text: 'task 5' },
    { check: false, text: 'task 6' },
    { check: true, text: 'task 7' }
  ];


  constructor() { }

  ngOnInit() {
    this.salesChart();
    this.dayChart();
    this.fullChart();
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

  private salesChart() {
    new Chart(document.getElementById("month-sales-chart"), {
      type: 'line',
      data: {
        labels: [0, 20, 40, 30, 10, 25, 36],
        datasets: [{
          data: [29, 25, 35, 30, 32, 25, 36],
          borderColor: "#3ebb8c",
          fill: false,
          lineTension: 0,
          borderWidth: 2,
          radius: 2
        }],
      },
      options: {
        scales: {
          xAxes: [{ display: false }],
          yAxes: [{ display: false }]
        },
        title: false,
        legend: false,
        layout: {
          padding: {
            left: 5,
            right: 5,
            top: 5,
            bottom: 5
          }
        },
        maintainAspectRatio: false,
        // responsive: true
      }
    });
  }

  private dayChart() {
    new Chart(document.getElementById("day-sales-chart"), {
      type: 'line',
      data: {
        labels: [0, 20, 40, 30, 10, 25, 36],
        datasets: [{
          data: [29, 25, 35, 30, 32, 25, 36],
          borderColor: "#3ebb8c",
          fill: false,
          lineTension: 0,
          borderWidth: 2,
          radius: 2
        }],
      },
      options: {
        scales: {
          xAxes: [{ display: false }],
          yAxes: [{ display: false }]
        },
        title: false,
        legend: false,
        layout: {
          padding: {
            left: 5,
            right: 5,
            top: 5,
            bottom: 0
          }
        },
        maintainAspectRatio: false,
        // responsive: true
      }
    });
  }

  private fullChart() {
    new Chart(document.getElementById("full-chart"), {
      type: 'line',
      data: {
        labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        datasets: [
          {
            data: [29, 25, 30, 25, 30, 25, 36, 30, 25, 29, 18, 30, 32, 25],
            backgroundColor: "rgba(144,146,165,.4)",
            borderColor: "#9092a5",
            borderWidth: 2,
            radius: 2
          },
          {
            data: [22, 15, 30, 34, 25, 39, 30, 36, 30, 20, 20, 34, 22, 39],
            backgroundColor: "rgba(62,187,140,.4)",
            borderColor: "#3ebb8c",
            borderWidth: 2,
            radius: 2
          }
        ],
      },
      options: {
        scales: {
          xAxes: [{ gridLines: { color: "rgba(0, 0, 0, 0)" } }],
          yAxes: [{ gridLines: { color: "rgba(0, 0, 0, 0)" } }]
        },
        title: false,
        legend: false,
        // layout: {
        //   padding: {
        //     left:5,
        //     right: 5,
        //     top: 5,
        //     bottom: 5
        //   }
        // },
        maintainAspectRatio: false,
        // responsive: true
      }
    });
  }

}
