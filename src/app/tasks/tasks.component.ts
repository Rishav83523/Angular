import { Component, Input } from '@angular/core';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) Taskname?: string;
  isAddingTask = false;

  //Dependecy Injection
  constructor(private tasksService: TasksService) {}

  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {
  //   this.tasksService.removeTask(id);
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCacelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(takData: NewTaskData) {
    this.isAddingTask = false;
  }
}
