import { Component, inject, signal } from '@angular/core';
import { SkillCategory } from '../../core/models/portfolio.models';
import { DataService } from '../../core/services/data';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-skills',
  standalone: true, 
  imports: [SectionTitle, ScrollAnimateDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
 readonly data = inject(DataService);

  activeCategory = signal<SkillCategory | 'all'>('all');

  categories: { key: SkillCategory | 'all'; label: string; icon: string }[] = [
    { key: 'all',      label: 'All',       icon: 'fas fa-th' },
    { key: 'frontend', label: 'Frontend',  icon: 'fas fa-palette' },
    { key: 'uiLibrary',  label: 'UI Library',icon: 'fas fa-swatchbook'},
    { key: 'devops',   label: 'DevOps',    icon: 'fas fa-cloud' },
    { key: 'tools',    label: 'Tools',     icon: 'fas fa-wrench' },
    { key: 'performance', label: 'Performance',  icon: 'fas fa-tachometer-alt' }
  ];

  get filteredSkills() {
    const cat = this.activeCategory();
    return cat === 'all'
      ? this.data.skills()
      : this.data.skills().filter(s => s.category === cat);
  }
}