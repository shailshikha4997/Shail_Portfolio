import { Component, inject } from '@angular/core';
import { DataService } from '../../core/services/data';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitle, ScrollAnimateDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly data = inject(DataService);
  highlights = [
   {
    icon: 'fas fa-laptop-code',
    title: 'Frontend Architecture',
    description: 'Skilled in designing clean, component-driven Angular architectures with reusable modules, smart/dumb component patterns, and scalable folder structures.'
  },
  {
    icon: 'fas fa-cogs',
    title: 'Performance Optimization',
    description: 'Proficient in lazy loading, OnPush change detection, tree-shaking, and bundle analysis to deliver fast-loading, smooth Angular applications.'
  },
  {
    icon: 'fas fa-users',
    title: 'Team Collaboration',
    description: 'Experienced in working with cross-functional teams, participating in code reviews, and following agile practices to deliver quality software on time.'
  },
  {
    icon: 'fas fa-universal-access',
    title: 'Clean & Maintainable Code',
    description: 'Committed to writing well-structured, testable, and readable code following Angular best practices, style guides, and SOLID principles.'
  },
  ];
}
