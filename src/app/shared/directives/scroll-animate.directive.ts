import {
  Directive, ElementRef, Input,
  AfterViewInit, OnDestroy, Renderer2
} from '@angular/core';

@Directive({                              // ← MUST be @Directive, NOT @Injectable
  selector: '[appScrollAnimate]',
  standalone: true,                       // ← MUST be true
})
export class ScrollAnimateDirective implements AfterViewInit, OnDestroy {
  @Input() animationClass = 'animate-fade-up';
  @Input() threshold = 0.15;
  @Input() delay = '0s';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const nativeEl = this.el.nativeElement;
    this.renderer.setStyle(nativeEl, 'opacity', '0');
    this.renderer.setStyle(nativeEl, 'animation-delay', this.delay);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(nativeEl, this.animationClass);
          this.renderer.setStyle(nativeEl, 'opacity', '1');
          this.observer.unobserve(nativeEl);
        }
      },
      { threshold: this.threshold }
    );

    this.observer.observe(nativeEl);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}