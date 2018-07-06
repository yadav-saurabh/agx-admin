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

  constructor() { }

  ngOnInit() {
    let slider1 = document.getElementById('slider1');
    let slider2 = document.getElementById('slider2');

    noUiSlider.create(slider1, {
      start: 40,
      connect: "lower",
      range: {
        min: 0,
        max: 100
      }
    });
    noUiSlider.create(slider2, {
      start: 40,
      connect: "lower",
      range: {
        min: 0,
        max: 100
      }
    });
  }

}
