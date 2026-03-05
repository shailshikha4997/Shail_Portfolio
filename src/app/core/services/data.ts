import { Injectable, signal, computed } from '@angular/core';
import {
  PersonalInfo, Skill, Project,
  Experience, Testimonial
} from '../models/portfolio.models';



@Injectable({
  providedIn: 'root',
})
export class DataService {

  readonly personalInfo = signal<PersonalInfo>({
    name: 'Shailshikha Bhardwaj',
    title: 'Senior Angular Developer',
    tagline: "4+ Years of Crafting Angular Applications Now Supercharged with AI. Building Intelligent, Scalable & High-Performance Web Experiences.",
    email: 'shailbhardwaj97@gmail.com',
    phone: '+91 8750467683',
    location: 'Lohiya Nagar, Ghaziabad',
    bio: `As a Senior Frontend Developer, I bring deep expertise in the Angular 
      framework and its ecosystem to every project I work on. I've designed 
      and developed multiple web applications spanning diverse domains, focusing 
      on component-driven architecture, performance optimization, and seamless 
      user experiences. My skill set extends beyond Angular — encompassing 
      TypeScript, SCSS, REST API integration, and modern DevOps practices — 
      enabling me to deliver end-to-end frontend solutions that are built to 
      scale and easy to maintain.`,
    resumeUrl: 'https://res.cloudinary.com/db8zonq3w/image/upload/v1771508830/downloadfile_agut6q.pdf',
    avatar: 'https://res.cloudinary.com/db8zonq3w/image/upload/v1771508423/IMG-20250121-WA0022_azuish.jpg',
    yearsOfExperience: 4,
    projectsCompleted: 8,
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/shailshikha4997', icon: 'fab fa-github' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shailb-9624b11b9/', icon: 'fab fa-linkedin-in' },
      { name: 'Twitter', url: 'https://twitter.com/Shail04_97', icon: 'fab fa-x-twitter' }
    ],
  });

  readonly skills = signal<Skill[]>([
    // Frontend
    { name: 'Angular', icon: 'fab fa-angular', level: 90, category: 'frontend' },
    { name: 'TypeScript', icon: 'fas fa-code', level: 95, category: 'frontend' },
    { name: 'RxJS', icon: 'fas fa-stream', level: 85, category: 'frontend' },
    { name: 'NgRx', icon: 'fas fa-database', level: 70, category: 'frontend' },
    { name: 'SCSS / SASS', icon: 'fab fa-sass', level: 90, category: 'frontend' },
    { name: 'HTML5', icon: 'fab fa-html5', level: 95, category: 'frontend' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', level: 93, category: 'frontend' },
    { name: 'JavaScript', icon: 'fab fa-js-square', level: 95, category: 'frontend' },
    { name: 'REST APIs', icon: 'fas fa-plug', level: 92, category: 'frontend' },

    //UI Library
    { name: 'Angular Material', icon: 'fas fa-th-large', level: 95, category: 'uiLibrary' },
    { name: 'PrimeNG', icon: 'fas fa-puzzle-piece', level: 80, category: 'uiLibrary' },
    { name: 'NG Bootstrap', icon: 'fab fa-bootstrap', level: 95, category: 'uiLibrary' },
    { name: 'Kendo UI', icon: 'fas fa-cubes', level: 85, category: 'uiLibrary' },

    // DevOps
    { name: 'CI/CD', icon: 'fas fa-sync-alt', level: 90, category: 'devops' },
    { name: 'AWS', icon: 'fab fa-aws', level: 60, category: 'devops' },

    // Tools
    { name: 'Git', icon: 'fab fa-git-alt', level: 95, category: 'tools' },
    { name: 'Jira', icon: 'fab fa-jira', level: 85, category: 'tools' },

    // Performance
{ name: 'Core Web Vitals', icon: 'fas fa-gauge-high', level: 95, category: 'performance' },
{ name: 'Lazy Loading', icon: 'fas fa-cloud-download-alt', level: 85, category: 'performance' },
{ name: 'Code Splitting', icon: 'fas fa-code-branch', level: 85, category: 'performance' }

  ]);

  readonly experiences = signal<Experience[]>([
    {
      id: 1,
      role: 'Senior Software Developer',
      company: 'Chetu India Pvt. Ltd,',
      location: 'Sec-63, Noida',
      startDate: 'Oct 2021',
      endDate: 'Present',
      current: false,
      description: '',
      achievements: [
        'Boosted application performance via lazy loading and OnPush change detection, achieving 90+ Lighthouse scores and 25% faster load times.',
        'Led migration from Angular 10 to Angular 16+ with zero downtime',
        'Designed reusable component libraries and shared modules, reducing development time by 30%',
        'Improved Core Web Vitals scores by 45% through performance optimization',
      ],
      technologies: ['Angular 10+', 'NgRx', 'RxJS', 'TypeScript', 'SCSS', 'Angular Material', 'Kendo UI', 'Bootstrap'],
    },
    {
      id: 2,
      role: 'Software Development Intern',
      company: 'Chetu India Pvt. Ltd.',
      location: 'Sec-63, Noida',
      startDate: 'Apr 2021',
      endDate: 'Sep 2021',
      current: false,
      description: 'Frontend Developer Intern (Angular JS)',
      achievements: [
        'Developed dynamic single-page applications using Angular framework, JavaScript, HTML5, and CSS3',
        'Built custom directives, services, and controllers for modular and maintainable code architecture'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Angular'],
    },
    {
      id: 3,
      role: 'Education',
      company: 'RCCV College',
      location: 'Meerut Road, Ghaziabad',
      startDate: 'Apr 2015',
      endDate: 'Mar 2018',
      current: false,
      description: 'BSc. (Mathematics)',
      achievements: [
        'Strong foundation in analytical thinking, problem-solving, and logical reasoning. Coursework included calculus, linear algebra, statistics, and discrete mathematics—skills that directly enhance software development and algorithm design.',
      ],
      technologies: [],
    },
    {
      id: 4,
      role: 'Education',
      company: 'Chaudhary Charan Singh',
      location: 'Meerut, UP',
      startDate: 'Apr 2018',
      endDate: 'Mar 2020',
      current: false,
      description: 'MSc. (Statistics)',
      achievements: [
        'Conducted research in predictive modeling and computational statistics, enhancing ability to build data-driven web applications',
        'Applied statistical methods to real-world datasets, strengthening skills in pattern recognition, forecasting, and optimization'
      ],
      technologies: [],
    }
  ]);

  readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'Cabinet & Countertop Management System',
      description: 'Comprehensive web-based solution for managing cabinet installation operations including measurement tracking, inventory management, and customer scheduling.',
      longDescription: 'End-to-end business management application that streamlines cabinet and countertop installation workflows. Features include real-time inventory tracking, customer appointment scheduling with calendar integration, measurement documentation system, workflow coordination from measurement to installation, and automated notifications. Built with modular architecture to enhance operational efficiency and customer satisfaction.',
      image: 'https://res.cloudinary.com/db8zonq3w/image/upload/v1771682875/OIP_ipuivh.webp',
      technologies: ['Angular 9', 'RxJs', 'Bootstrap', 'CSS'],
      category: 'Enterprise',
      liveUrl: '',
      githubUrl: '',
      featured: true,
    },
    {
      id: 2,
      title: 'Insurance 360° Analytics Dashboard',
      description: 'Real-time insurance management platform with advanced analytics, customer policy tracking, and interactive data visualization for comprehensive business insights.',
      longDescription: 'Enterprise-grade insurance management dashboard providing 360-degree visibility into customer policies, daily progress tracking, and operational metrics. Features interactive charts and graphs for premium collection analysis, policy renewal monitoring, claims processing status, and customer portfolio management. Includes real-time data visualization using Chart.js/D3.js, customizable reporting dashboards, day-to-day progress tracking, policy lifecycle management, and comprehensive analytics for business intelligence. Built with Angular framework to deliver responsive, data-driven insights that empower insurance firms to make informed decisions and improve customer service.',
      image: 'https://res.cloudinary.com/db8zonq3w/image/upload/v1771682999/download_pvswyt.webp',
      technologies: ['Angular', 'TypeScript', 'Chart.js', 'RxJS', 'Bootstrap', 'RESTful API', 'CSS'],
      category: 'Insurance Analytics',
      liveUrl: '',
      githubUrl: '',
      featured: true,
    },
    {
      id: 3,
      title: 'Medical Healthcare Management System',
      description: 'Enterprise healthcare platform successfully migrated from Angular 4 to Angular 11, enhancing performance, security, and maintainability while introducing modern features.',
      longDescription: 'Comprehensive medical management system serving healthcare providers with patient records management, appointment scheduling, and clinical workflows. Successfully led the major version upgrade from Angular 4 to Angular 11, involving complete codebase refactoring, deprecated API replacements, RxJS migration from v5 to v6, HttpClient implementation, and modern Angular best practices adoption. The upgrade resulted in 50% improved application performance, enhanced security compliance, reduced bundle size, and improved developer experience with modern tooling. Features include patient registration, electronic health records (EHR), appointment management, prescription tracking, billing integration, and comprehensive reporting dashboards.',
      image: 'https://res.cloudinary.com/db8zonq3w/image/upload/v1771683110/download_1_g5kxx2.webp',
      technologies: ['Angular 11', 'Git', 'Angular Material', 'TypeScript'],
      category: 'Healthcare',
      liveUrl: '',
      featured: true,
    },
    {
      id: 4,
      title: 'AutoLone Tech - Vehicle Insurance Platform',
      description: 'Comprehensive vehicle insurance management system streamlining policy administration, claims processing, and customer service for automotive insurance operations.',
      longDescription: 'Full-featured vehicle insurance platform designed to digitize and optimize automotive insurance workflows from quote generation to claims settlement. AutoLone Tech provides end-to-end insurance lifecycle management including vehicle registration, policy issuance, premium calculation, renewal management, claims processing, and customer portal. Features real-time quote generation based on vehicle specifications, automated premium calculations, policy document generation, payment gateway integration, claims tracking with photo uploads, damage assessment workflows, and comprehensive analytics dashboard. Built with Angular framework utilizing responsive design for multi-device access, RESTful API integration for backend services, and secure data handling compliant with insurance industry standards.',
      image: 'https://res.cloudinary.com/db8zonq3w/image/upload/v1771683297/OIP_1_ncob6l.webp',
      technologies: ['Angular 14', 'Trello', 'Kendo UI', 'Typescript'],
      category: 'Insurance Technology',
      githubUrl: '',
      featured: true,
    },
    {
      id: 5,
      title: 'Emergency Vehicle ERP System',
      description: 'Enterprise Resource Planning system for emergency vehicle manufacturing and distribution, managing sales orders, purchase orders, inventory control, and comprehensive reporting across all operational modules.',
      longDescription: 'Full-featured ERP solution designed specifically for emergency vehicle industry managing end-to-end business operations from procurement to delivery. The system integrates multiple modules including Sales Order Management for customer orders, quotations, and order fulfillment tracking; Purchase Order Management for vendor procurement, PO generation, and receiving processes; Inventory Management with real-time stock tracking, warehouse operations, and parts management for emergency vehicle components; Shipping & Logistics module for delivery scheduling, shipment tracking, and carrier integration; Comprehensive Reporting Dashboard providing analytics across all modules including sales performance, inventory levels, purchase analytics, and shipping metrics. Features include automated workflow approvals, document generation for orders and invoices, multi-location inventory tracking, vendor and customer management, and role-based access control. Built with Angular framework utilizing responsive design for desktop and mobile access, RESTful API integration for backend services, and advanced data visualization for business intelligence.',
      image: 'https://res.cloudinary.com/db8zonq3w/image/upload/v1771683397/OIP_2_lj7cto.webp',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap', 'JIRA', 'RESTful API', 'SCSS', 'Angular Material', 'Git'],
      category: 'Enterprise ERP',
      githubUrl: '',
      featured: false,
    },
    {
      id: 6,
      title: 'Medical Insurance Clinic Management System',
      description: 'Comprehensive healthcare appointment management platform for medical insurance firms, managing patient scheduling across multiple clinicians, locations, appointment types, and therapy sessions with advanced calendar and print functionality.',
      longDescription: 'Enterprise-grade clinic management system designed for medical insurance providers to streamline patient appointment scheduling and clinician coordination across multiple facilities. The platform manages complex scheduling scenarios including individual patient appointments, recurring appointments with customizable frequency (daily, weekly, monthly), group therapy sessions with multiple participants, family therapy coordination, and multi-location clinic operations. Features advanced clinician calendar management with real-time availability tracking, appointment conflict detection, automated reminder notifications, patient waitlist management, and comprehensive print functionality for daily, weekly, and monthly clinician schedules. Includes patient portal for self-service booking, insurance verification integration, appointment history tracking, cancellation and rescheduling workflows, and analytics dashboard for appointment utilization, no-show rates, and clinician productivity. Built with Angular framework providing responsive calendar views, drag-and-drop scheduling, multi-location filtering, and role-based access for administrators, clinicians, and front desk staff.',
      image: 'https://res.cloudinary.com/db8zonq3w/image/upload/v1771683485/MicrosoftTeams-image-1_aktfpj.jpg',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Calendar Scheduler', 'Angular Material', 'Bootstrap', 'RESTful API', 'Git', 'pdfmake'],
      category: 'Healthcare Management',
      githubUrl: '',
      featured: false,
    },
  ]);

  readonly testimonials = signal<Testimonial[]>([
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'VP of Engineering',
      company: 'TechCorp Global',
      avatar: 'assets/images/avatars/avatar1.jpg',
      content: 'Alex is hands-down the best Angular developer I\'ve worked with. Their architectural decisions saved us months of refactoring, and their mentorship elevated our entire frontend team.',
      rating: 5,
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Product Manager',
      company: 'FinanceFlow Inc.',
      avatar: 'assets/images/avatars/avatar2.jpg',
      content: 'The trading dashboard Alex built handles incredible complexity with a seamless UX. They have an rare ability to translate complex requirements into elegant solutions.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'CTO',
      company: 'HealthTech Solutions',
      avatar: 'assets/images/avatars/avatar3.jpg',
      content: 'Alex\'s attention to accessibility and security in our healthcare portal was exceptional. They don\'t just write code—they engineer solutions that truly serve users.',
      rating: 5,
    },
  ]);

  // Computed helpers
  readonly featuredProjects = computed(() =>
    this.projects().filter(p => p.featured)
  );

  readonly skillsByCategory = computed(() => {
    const skills = this.skills();
    return {
      frontend: skills.filter(s => s.category === 'frontend'),
      backend: skills.filter(s => s.category === 'uiLibrary'),
      database: skills.filter(s => s.category === 'database'),
      devops: skills.filter(s => s.category === 'devops'),
      tools: skills.filter(s => s.category === 'tools'),
    };
  });
}
