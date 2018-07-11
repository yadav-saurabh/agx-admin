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

  constructor() { }

  ngOnInit() {
    this.salesChart();
    this.dayChart();
    this.fullChart();
    $('#cal').fullCalendar({
      themeSystem: 'bootstrap4',
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

  salesChart() {
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

  dayChart() {
    new Chart(document.getElementById("day-sales-chart"), {
      type: 'line',
      data: {
        labels: [0, 20, 40, 30, 10, 25, 36],
        datasets: [{
          data: [29, 25, 35, 30, 32, 25, 36],
          borderColor: "#3ebb8c",
          fill: false,
          lineTension: 0
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

  fullChart() {
    new Chart(document.getElementById("full-chart"), {
      type: 'line',
      data: {
        labels: [0, 20, 40, 30, 10, 25, 36],
        datasets: [
          {
            data: [29, 25, 35, 30, 32, 25, 36],
            borderColor: "#3ebb8c",
          },
          {
            data: [32, 20, 30, 34, 22, 39, 30],
            borderColor: "#0ebb8c",
          },
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
