import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';

@Injectable()
export class TaskService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
      status: TaskStatus.IN_PROGRESS,
    },
  ];
  getAllTask() {
    return this.tasks;
  }
  createTask() {}
  updateTask() {}
  deleteTask() {}
}
