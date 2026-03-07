import { Component, inject, signal } from '@angular/core';
import { DataService } from '../../core/services/data';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionTitle, ScrollAnimateDirective, FormsModule ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly data = inject(DataService);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  submitted = signal(false);
  sending = signal(false);

  async onSubmit(): Promise<void> {
    this.sending.set(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    this.sending.set(false);
    this.submitted.set(true);
    this.formData = { name: '', email: '', subject: '', message: '' };

    setTimeout(() => this.submitted.set(false), 5000);
    console.log(this.formData,'Form submitted')
  }

  contactInfo = [
    { icon: 'fas fa-envelope',    label: 'Email',    value: 'shailbhardwaj97@gmail.com',       link: 'shailbhardwaj97@gmail.com' },
    { icon: 'fas fa-phone',       label: 'Phone',    value: '+91 8750467683',        link: 'tel:+91 8750467683' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Lohiya Nagar Ghaziabad, UP',     link: null },
  ];
}
