import { Component, inject, signal } from '@angular/core';
import { DataService } from '../../core/services/data';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [SectionTitle, ScrollAnimateDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  readonly data = inject(DataService);
  activeIndex = signal(0);
  get current() {
    return this.data.testimonials()[this.activeIndex()];
  }

  next(): void {
    const len = this.data.testimonials().length;
    this.activeIndex.update(i => (i + 1) % len);
  }

  prev(): void {
    const len = this.data.testimonials().length;
    this.activeIndex.update(i => (i - 1 + len) % len);
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
  }
}
