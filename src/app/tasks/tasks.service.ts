import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskServise {
  tasks = signal<Task[]>([]);

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }
}
