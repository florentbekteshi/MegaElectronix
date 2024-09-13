import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubtaskComponent } from "../subtask/subtask.component";
import { IconComponent } from "../icon/icon.component";
import { IeditList, IattributeList} from '../../commo/types';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule, SubtaskComponent, IconComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})

export class DetailsComponent {
  editingId: number | null = null;
  newParagraph: string | number = '';

  attributeList: IattributeList[] = [
    { name: 'Status', icon: 'icon-status', },
    { name: 'Assignee', icon: 'icon-assignee', },
    { name: 'Co-owner', icon: 'icon-coowner', },
    { name: 'Importance', icon: 'icon-importance', },
    { name: 'Customer name', icon: 'icon-customername' },
    { name: 'Invoice ID', icon: 'icon-invoiceid' },
  ];

  editList: IeditList[] = [
    {
      id: 1,
      paragraph: 'Brian Griffin',
      placeholder: 'Enter assignee',
      type: 'string',
    },
    {
      id: 2,
      paragraph: 'Peter Griffin',
      placeholder: 'Enter co-owner',
      type: 'string',
    },
    {
      id: 3,
      paragraph: 'Very urgent',
      placeholder: 'Enter importance',
      type: 'string',
    },
    { id: 4, paragraph: '', placeholder: 'Enter name', type: 'string' },
    {
      id: 5,
      paragraph: '19823190',
      placeholder: 'Enter invoice id',
      type: 'number',
    },
  ];

  onEdit(id: number, currentParagraph: string | number) {
    this.editingId = id;
    this.newParagraph = currentParagraph !== undefined ? currentParagraph : '';
  }

  onBlur(id: number) {
    const item = this.editList.find((item) => item.id === id);
    if (item) {
      item.paragraph = this.newParagraph;
      this.editingId = null;
    }
  }

  onEnter(event: KeyboardEvent, id: number) {
    if (event.key === 'Enter') {
      this.onBlur(id);
    }
  }

}
