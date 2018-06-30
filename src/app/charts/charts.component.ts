import { Component, OnInit } from '@angular/core';
declare var Chart: any;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  constructor() {}

  ngOnInit() {
    const pie = document.getElementById("pieChart");
    const polar = document.getElementById("polarChart");
    const radar = document.getElementById("radarChart");
    const bar = document.getElementById("barChart");
    let pieChart = new Chart(pie, {
      type: 'pie',
      data: this.data,
      options: {
        responsive: true
      }
    });
    let polarChart = new Chart(polar, {
      type: 'polarArea',
      data: this.data,
      options: {
        responsive: true
      }
    });
    let radarChart = new Chart(radar, {
      type: 'radar',
      data: this.data,
      options: {
        responsive: true
      }
    });
    let barChart = new Chart(bar, {
      type: 'horizontalBar',
      data: this.data,
      options: {
        responsive: true
      }
    });
  }

}
