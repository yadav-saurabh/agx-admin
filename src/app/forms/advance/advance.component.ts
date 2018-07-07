import { Component, OnInit } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import noUiSlider from 'nouislider';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit {

  dateTime: FlatpickrOptions = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
  };

  time: FlatpickrOptions = {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i"
  }

  range: FlatpickrOptions = {
    mode: "range"
  }

  week: FlatpickrOptions = {
    weekNumbers: true
  }

  multiple: FlatpickrOptions = {
    mode: "multiple"
  }

  inline: FlatpickrOptions = {
    inline: true
  }

  selectItems = ['item#1', 'item#2', 'item#3'];
  tagInput = ['Pizza', 'Pasta', 'Parmesan'];

  constructor() { }

  ngOnInit() {
    this.serRangeSlider();
  }

  serRangeSlider() {
    let slider1 = document.getElementById('slider1');
    let slider1_2 = document.getElementById('slider1_2');
    let slider2 = document.getElementById('slider2');
    let slider3 = document.getElementById('slider3');
    let slider4 = document.getElementById('slider4');
    let slider4_2 = document.getElementById('slider4_2');
    let slider5 = document.getElementById('slider5');
    let slider6 = document.getElementById('slider6');

    noUiSlider.create(slider1, {
      start: 40,
      connect: "lower",
      range: {
        min: 0,
        max: 100
      }
    });
    noUiSlider.create(slider1_2, {
      start: 50,
      connect: "upper",
      range: {
        min: 0,
        max: 100
      }
    });
    noUiSlider.create(slider2, {
      start: [20, 150],
      connect: true,
      range: {
        'min': 0,
        'max': 200
      }
    });
    noUiSlider.create(slider3, {
      range: {
        'min': [0],
        '10%': [500, 500],
        '50%': [4000, 1000],
        'max': [10000]
      },
      connect: 'lower',
      start: 1900,
      pips: {
        mode: 'range',
        density: 3
      }
    })
    noUiSlider.create(slider4, {
      start: 40,
      connect: "upper",
      orientation: 'vertical',
      range: {
        'min': 0,
        'max': 100
      }
    });
    noUiSlider.create(slider4_2, {
      start: 70,
      connect: "lower",
      orientation: 'vertical',
      range: {
        'min': 0,
        'max': 100
      }
    });
    noUiSlider.create(slider5, {
      start: [20, 150],
      orientation: "vertical",
      connect: true,
      range: {
        'min': 0,
        'max': 200
      }
    });
    noUiSlider.create(slider6, {
      orientation: "vertical",
      range: {
        'min': [0],
        '10%': [100, 100],
        '50%': [500, 500],
        'max': [1000]
      },
      connect: 'lower',
      start: 400,
      pips: {
        mode: 'range',
        density: 3
      }
    })
  }

}
