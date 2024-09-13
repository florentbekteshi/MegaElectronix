import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [CommonModule],
})
export class IconComponent {
  @Input() name: string = '';
  @Input() size: 'ultraSmall' | 'small' | 'medium' | 'large' = 'small';
  @Input() alt: string = '';
  @Input() color: string = '';
  @Input() folder: string = 'assets/images';

  get src(): string {
    return `${this.folder}/${this.name}.svg`;
  }

  get dimensions(): { width: string; height: string } {
    const sizes = {
      ultraSmall: '10px',
      small: '12px',
      medium: '15px',
      large: '16px',
    };
    return {
      width: sizes[this.size],
      height: sizes[this.size],
    };
  }
}
