import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  templateUrl: './section-title.html',
  styleUrl: './section-title.scss',
})
export class SectionTitle {
  @Input({ required: true }) title!: string;
  @Input() subtitle = '';
  @Input() align: 'center' | 'left' = 'center';
}
