import { Injectable, signal } from '@angular/core';
import { fromEvent, throttleTime } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly activeSection = signal('hero');
  readonly scrollY = signal(0);
  readonly isScrolled = signal(false);

  constructor() {
    fromEvent(window, 'scroll')
      .pipe(throttleTime(100))
      .subscribe(() => {
        this.scrollY.set(window.scrollY);
        this.isScrolled.set(window.scrollY > 50);
        this.detectSection();
      });
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private detectSection(): void {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'testimonials', 'contact'];
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          this.activeSection.set(id);
          break;
        }
      }
    }
  }
}