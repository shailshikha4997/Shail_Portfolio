import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data';
import { ScrollService } from '../../core/services/scroll';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero  implements OnInit, OnDestroy {
  readonly data = inject(DataService);
  readonly scroll = inject(ScrollService);
  typedText = 'Front-end Developer';
  // private roles = [
  //   'Front-end Developer'
  // ];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingInterval!: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.typeEffect();
  }

  ngOnDestroy(): void {
    clearInterval(this.typingInterval);
  }

  private typeEffect(): void {
    const currentRole = this.typedText;
    const speed = this.isDeleting ? 40 : 80;

    this.typingInterval = setInterval(() => {
      if (!this.isDeleting) {
        this.typedText = currentRole.substring(0, this.charIndex + 1);
        this.charIndex++;

        if (this.charIndex === currentRole.length) {
          this.isDeleting = true;
          clearInterval(this.typingInterval);
          setTimeout(() => this.typeEffect(), 2000);
          return;
        }
      } else {
        this.typedText = currentRole.substring(0, this.charIndex - 1);
        this.charIndex--;

        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.roleIndex = this.roleIndex;
          clearInterval(this.typingInterval);
          setTimeout(() => this.typeEffect(), 500);
          return;
        }
      }
    }, speed);
  }
}
