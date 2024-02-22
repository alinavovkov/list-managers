import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from '../tasks.component';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrl: './child-list.component.scss',
  template: `<h1>{{headline}}</h1>`

})
export class ChildListComponent {
  @Input() tasks: Task[] = [];
  @Input() textOfTask!: string;
  public editStatus = false;
  public currentTask!: any;

  selectedTask: Task | null = null;

  ngOnChanges(changes: SimpleChanges): void { }

  ngOnInit(): void { }

  deleteBtn(id: number): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.updateNumProperties();
    }
  }
  private updateNumProperties(): void {
    for (let i = 0; i < this.tasks.length; i++) {
      this.tasks[i].id = i + 1;
    }
  }

  updateStatus(task: any): void {

  }

  editTask(id: number): void {
    this.selectedTask = { ...this.tasks[id-1] };
  }
  saveChanges(): void {
    if (this.selectedTask) {
      // Update the original task in the tasks array with the edited task
      const index = this.tasks.findIndex(task => task.id === this.selectedTask!.id);
      if (index !== -1) {
        this.tasks[index] = { ...this.selectedTask }; // Ensure you create a new object
      }

      // Clear the selectedTask
      this.selectedTask = null;
    }
  }
}
