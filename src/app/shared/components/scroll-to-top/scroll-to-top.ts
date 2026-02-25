import { Component, inject } from '@angular/core';
import { ScrollService } from '../../../core/services/scroll';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  template: `
    @if (scroll.isScrolled()) {
      <button class="scroll-top" (click)="scroll.scrollTo('hero')" aria-label="Scroll to top">
        <i class="fas fa-arrow-up"></i>
      </button>
    }
  `,
  styleUrl: './scroll-to-top.scss',
})
export class ScrollToTop {
  readonly scroll = inject(ScrollService);  // ✅ NOT ScrollAnimateDirective
}