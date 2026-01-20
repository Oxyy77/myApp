import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  @ViewChild('slideContainer') slideContainer!: ElementRef;

  welcomeSlides = [
    {
      title: 'Manage Your Team',
      description: 'Effortlessly manage employee data, attendance, and performance all in one place.',
      icon: 'people-outline',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600'
    },
    {
      title: 'Track Attendance',
      description: 'Real-time attendance tracking with clock-in/out features and comprehensive reports.',
      icon: 'time-outline',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600'
    },
    {
      title: 'Leave Management',
      description: 'Submit and approve leave requests seamlessly with our intuitive leave management system.',
      icon: 'calendar-outline',
      color: 'bg-gradient-to-br from-emerald-400 to-emerald-500'
    },
    {
      title: 'Payroll Made Easy',
      description: 'Automate payroll processing and generate accurate salary reports every month.',
      icon: 'card-outline',
      color: 'bg-gradient-to-br from-rose-400 to-rose-500'
    }
  ];

  currentSlide = 0;

  constructor(private router: Router) {}

  onScroll(event: any) {
    const container = event.target;
    const slideWidth = container.offsetWidth;
    const scrollPosition = container.scrollLeft;
    this.currentSlide = Math.round(scrollPosition / slideWidth);
  }

  next() {
    if (this.currentSlide === this.welcomeSlides.length - 1) {
      this.startApp();
    } else {
      this.scrollToSlide(this.currentSlide + 1);
    }
  }

  skip() {
    this.startApp();
  }

  scrollToSlide(index: number) {
    const container = this.slideContainer.nativeElement;
    const slideWidth = container.offsetWidth;
    container.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
  }

  startApp() {
    // Navigate to login or home page
    this.router.navigate(['/login']);
  }

  getButtonText(): string {
    return this.currentSlide === this.welcomeSlides.length - 1 ? 'Get Started' : 'Next';
  }

  getProgressWidth(): number {
    return ((this.currentSlide + 1) / this.welcomeSlides.length) * 100;
  }
}
