import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: ['.table{margin: 0;}']
})
export class BasicComponent {

  defaultTable = {
    head: ['#', 'First', 'Last', 'Handle'],
    body: [
      ['Mark', 'Otto', '@mdo'],
      ['Jacob', 'Thornton', '@fat'],
      ['Larry', 'the Bird', '@twitter']
    ]
  };
}
