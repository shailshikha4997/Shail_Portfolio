import { Component, inject } from '@angular/core';
import { DataService } from '../../core/services/data';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionTitle, ScrollAnimateDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {

  readonly data = inject(DataService);
}
