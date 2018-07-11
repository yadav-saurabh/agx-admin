import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html'
})
export class EditorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    ClassicEditor
      .create(document.querySelector('#editor'))
      .then(editor => {
        // console.log(editor);
      })
      .catch(error => {
        console.error(error);
      });

    InlineEditor
      .create(document.querySelector('#inline-editor'))
      .then(editor => {
        // console.log(editor);
      })
      .catch(error => {
        console.error(error);
      });
    InlineEditor
      .create(document.querySelector('#inline-editor-col1'))
      .then(editor => {
        // console.log(editor);
      })
      .catch(error => {
        console.error(error);
      });
    InlineEditor
      .create(document.querySelector('#inline-editor-col2'))
      .then(editor => {
        // console.log(editor);
      })
      .catch(error => {
        console.error(error);
      });
  }

}
