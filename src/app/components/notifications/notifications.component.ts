import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
// import { NotificationsService } from 'angular2-notifications';
// import { NotificationsService } from 'projects/angular6-notifications/src/public_api';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styles: ['']
})
export class NotificationsComponent implements OnInit {
/*
	form: FormGroup;
  types = ['alert', 'error', 'info', 'warn', 'success'];
	animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];
	// options= {}

	logs: any[] = [];

  options: any = {
    progress: true,
    timeout: 1000 * 3,
    pauseOnHover: true,
    clickToClose: true,
    theme: 'default',
    rtl: false,
    className: 'my-notify',
    animate_in: 'notify-fade-in',
    animate_out: 'notify-fade-out',
    onCreate: item => {
      this.logs.push(item);
    },
    onDestroy: item => {
      this.logs.push(item);
    },
  };

  setting: any = {
    position: ['right', 'bottom'],
    offset: [20, 20],
    lastOnBottom: true,
    zIndex: 1031,
    minWidth: 300,
    maxWidth: 300,
  };

*/
constructor(/*private notify:NotificationsService, private fb: FormBuilder*/) { }

  ngOnInit() {
	/*	this.form = this.fb.group({
			type: 'success',
			title: 'This is just a title',
			content: 'This is just some content',
			timeOut: 5000,
			showProgressBar: true,
			pauseOnHover: true,
			preventDuplicates: true,
			preventLastDuplicates: true,
			clickToClose: true,
			maxStack : 5,
			animate: 'fromRight'
		});*/
	}
/*
	create() {
		const temp = this.form.getRawValue();
		const title = temp.title;
		const content = temp.content;
		// const type = temp.type;

		delete temp.title;
		delete temp.content;
		// delete temp.type;


		// console.log(temp);
		// this.notify.success(title, content, this.options);
		this.notify.success(title, content, this.options);
		// this.notifications.create(title, content, type, temp);
	}
*/
}
