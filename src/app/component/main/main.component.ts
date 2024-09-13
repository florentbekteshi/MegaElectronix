import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { ActivityComponent } from '../activity/activity.component';
import { AttachmentsComponent } from '../attachments/attachments.component';
import { CommentsComponent } from '../comments/comments.component';
import { IconComponent } from '../icon/icon.component';
import { ItabsItem } from '../../commo/types';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DetailsComponent,
    ActivityComponent,
    AttachmentsComponent,
    CommentsComponent,
    IconComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  activeTab: string = 'Details';

  tabsItem: ItabsItem[] = [
    { name: 'Details', active: true, icon: 'icon-details' },
    { name: 'Activity', active: false, icon: 'icon-activity' },
    { name: 'Comments', active: false, icon: 'icon-comments' },
    { name: 'Attachments', active: false, icon: 'icon-attachments' },
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.tabsItem.find((item) => (item.active = item.name === tab));
  }
}
