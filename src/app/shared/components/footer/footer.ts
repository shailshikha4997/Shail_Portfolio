import { Component, inject } from '@angular/core';
import { DataService } from '../../../core/services/data';
import { ScrollService } from '../../../core/services/scroll';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly data = inject(DataService);
  readonly scroll = inject(ScrollService); 
  currentYear = new Date().getFullYear();
}
