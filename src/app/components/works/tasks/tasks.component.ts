import { Component, Input, OnInit, EventEmitter } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface Task {
  id: number;
  name: string;
  status: boolean;
}
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  public editStatus = false;

  txtTask!: string;
  private _taskList: Task[] = [];
  public get taskList(): Task[] {
    return this._taskList;
  }
  public set taskList(value: Task[]) {
    this._taskList = value;
  }


  addBtn(): void {
    const newTask: Task = {
      id: this.taskList.length + 1,
      name: this.txtTask,
      status: false
    }
    this.taskList.push(newTask);

    console.log(this.taskList);

    this.txtTask = '';
  }
  updateTask(): void {

  }
  ngOnInit(): void {
  }
}
