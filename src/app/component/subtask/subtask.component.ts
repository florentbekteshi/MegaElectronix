import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from "../icon/icon.component";
import { IsubTask } from '../../commo/types';

@Component({
  selector: 'app-subtask',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, IconComponent],
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss'],
})
export class SubtaskComponent {
  @ViewChild('subTaskInput') subTaskInput!: ElementRef;
  newSubTaskDesc: string = '';
  addNewSubtask: boolean = false;

  subTasks: IsubTask[] = [
    { id: 1, desc: 'Send invoice to collections agency', completed: false, isEditing: false },
    { id: 2, desc: 'Write an email to them to follow-up', completed: false, isEditing: false },
    { id: 3, desc: 'Send paper mail to account', completed: false, isEditing: false },
    {
      id: 4,
      desc: 'This is my new subtask… I’m autofocused here when I add a subtask',
      completed: false,
      isEditing: false,
    },
  ];


  addSubTask() {
    if (!this.addNewSubtask) {
      this.addNewSubtask = true;
      return;
    }
    if (this.newSubTaskDesc.trim()) {
      const newId = this.subTasks.length
        ? Math.max(...this.subTasks.map((t) => t.id)) + 1
        : 1;
      this.subTasks.push({
        id: newId,
        desc: this.newSubTaskDesc,
        completed: false,
        isEditing: false,
      });
      this.newSubTaskDesc = '';
      this.subTaskInput.nativeElement.focus();
    }
  }

  triggerCompleted(id: number) {
    const subtask = this.subTasks.find((sub) => sub.id === id);
    subtask!.completed = !subtask?.completed;
  }

  calculateWidth() {
    const completed = this.subTasks.filter(
      (subtask) => subtask.completed
    ).length;

    if (this.subTasks.length === 0) return 0;
    const res = (completed / this.subTasks.length) * 100;
    return res;
  }

  get completedSubTasksCount(): number {
    return this.subTasks
      ? this.subTasks.filter((subTask) => subTask.completed).length
      : 0;
  }

  get totalSubTasksCount(): number {
    return this.subTasks ? this.subTasks.length : 0;
  }

  editTask(task: IsubTask) {
    task.isEditing = true;
  }

  saveTask(task: IsubTask) {
    task.isEditing = false;
  }
}
