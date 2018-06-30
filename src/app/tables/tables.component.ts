import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: ['']
})
export class TablesComponent {

  defaultTable = {
    head:['#','First','Last','Handle'],
    body:[
      ['Mark', 'Otto', '@mdo'],
      ['Jacob', 'Thornton', '@fat'],
      ['Larry', 'the Bird', '@twitter'] 
    ]
  };

}
