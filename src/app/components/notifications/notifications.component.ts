import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(
    private _notifications: NotificationsService,
    private _fb: FormBuilder
  ) { }

  form: FormGroup;

  types = ['alert', 'error', 'info', 'warn', 'success'];
	animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];

  ngOnInit() {
		this.form = this._fb.group({
			type: 'success',
			title: 'This is just a title',
			content: 'This is just some content',
			timeOut: 5000,
			showProgressBar: true,
			pauseOnHover: true,
			clickToClose: true,
			animate: 'fromRight'
		});
	}

	create() {

		const temp = this.form.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type = temp.type;

		delete temp.title;
		delete temp.content;
		delete temp.type;
    console.log(temp);
		this._notifications.create(title, content, type, temp)
	}

}
