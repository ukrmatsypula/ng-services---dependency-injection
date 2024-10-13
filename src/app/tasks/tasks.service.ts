import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskServise {
  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTask) =>
      oldTask.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }
}
