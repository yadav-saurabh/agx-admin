import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  newTask = '';
  tasks = [
    { check: true, text: 'learn something new' },
    { check: false, text: 'read 5 book in a year' },
    { check: true, text: 'start swimming' },
    { check: true, text: 'Do a very imporatnt task' },
    { check: false, text: 'Not so very important task' }
  ];

  constructor() {}

  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  addTask() {
    if (!!this.newTask) {
      this.tasks.push({ check: false, text: this.newTask });
    }
    this.newTask = '';
  }
}
