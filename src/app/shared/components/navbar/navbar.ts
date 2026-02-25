import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme';
import { ScrollService } from '../../../core/services/scroll';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly theme = inject(ThemeService);
  readonly scroll = inject(ScrollService);

  mobileOpen = false;

  navLinks = [
    { label: 'Home',         id: 'hero' },
    { label: 'About',        id: 'about' },
    { label: 'Skills',       id: 'skills' },
    { label: 'Experience',   id: 'experience' },
    { label: 'Projects',     id: 'projects' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact',      id: 'contact' },
  ];

  navigateTo(id: string): void {
    this.scroll.scrollTo(id);
    this.mobileOpen = false;
  }
}
