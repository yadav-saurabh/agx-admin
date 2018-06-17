import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

	form: FormGroup;
  types = ['alert', 'error', 'info', 'warn', 'success'];
	animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];

  constructor(private notifications: NotificationsService, private fb: FormBuilder) { }

  ngOnInit() {
		this.form = this.fb.group({
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

		this.notifications.create(title, content, type, temp);
	}

}
