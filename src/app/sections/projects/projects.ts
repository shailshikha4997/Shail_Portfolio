import { Component, inject, signal } from '@angular/core';
import { DataService } from '../../core/services/data';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionTitle, ScrollAnimateDirective, TruncatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly data = inject(DataService);
  showAll = signal(false);

  get displayedProjects() {
    return this.showAll()
      ? this.data.projects()
      : this.data.featuredProjects();
  }
}
