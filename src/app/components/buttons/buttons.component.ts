import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  paginationPage = 1;

  incPage() {
    if (this.paginationPage < 5) { this.paginationPage++; }
  }

  decPage() {
    if (this.paginationPage > 1) {
      this.paginationPage--;
    }
  }

  goToPage(number) {
    this.paginationPage = number;
  }
}
