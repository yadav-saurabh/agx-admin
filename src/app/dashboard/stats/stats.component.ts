import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { colorCodes } from '@shared/config/colorCodes';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.salesChart();
    this.dayChart();
    this.fullChart();
  }

  private salesChart() {
    const sales = new Chart(document.getElementById('month-sales-chart'), {
      type: 'line',
      data: {
        labels: [0, 20, 40, 30, 10, 25, 36],
        datasets: [
          {
            data: [29, 25, 35, 30, 32, 25, 36],
            borderColor: colorCodes.primary.hex,
            fill: false,
            lineTension: 0,
            borderWidth: 2,
            radius: 2
          }
        ]
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
        maintainAspectRatio: false
      }
    });
  }

  private dayChart() {
    const day = new Chart(document.getElementById('day-sales-chart'), {
      type: 'line',
      data: {
        labels: [0, 20, 40, 30, 10, 25, 36],
        datasets: [
          {
            data: [29, 25, 35, 30, 32, 25, 36],
            borderColor: colorCodes.primary.hex,
            fill: false,
            lineTension: 0,
            borderWidth: 2,
            radius: 2
          }
        ]
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
        maintainAspectRatio: false
        // responsive: true
      }
    });
  }

  private fullChart() {
    const full = new Chart(document.getElementById('full-chart'), {
      type: 'line',
      data: {
        labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        datasets: [
          {
            data: [29, 25, 30, 25, 30, 25, 36, 30, 25, 29, 18, 30, 32, 25],
            backgroundColor: 'rgba(' + colorCodes.secondary.rgba + ' ,.4)',
            borderColor: colorCodes.secondary.hex,
            borderWidth: 2,
            radius: 2
          },
          {
            data: [22, 15, 30, 34, 25, 39, 30, 36, 30, 20, 20, 34, 22, 39],
            backgroundColor: 'rgba( ' + colorCodes.primary.rgba + ',.4)',
            borderColor: colorCodes.primary.hex,
            borderWidth: 2,
            radius: 2
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{ gridLines: { color: 'rgba(0, 0, 0, 0)' } }],
          yAxes: [{ gridLines: { color: 'rgba(0, 0, 0, 0)' } }]
        },
        title: false,
        legend: false,
        maintainAspectRatio: false
      }
    });
  }
}
