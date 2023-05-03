import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.scss'],
})
export class BootComponent {
  progressBarValue = 0;
  elem: any;
  isFullScreen = false;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {
    this.elem = document.documentElement;
  }

  chkScreenMode() {
    this.toggleFullScreen();
    this.isFullScreen = true;
    this.navigateToHome();
  }

  toggleFullScreen() {
    const methodToBeInvoked =
      this.elem.requestFullscreen ||
      this.elem.webkitRequestFullscreen() ||
      this.elem.mozRequestFullScreen() ||
      this.elem.msRequestFullscreen();
    if (methodToBeInvoked) methodToBeInvoked.call(this.elem);
  }

  navigateToHome() {
    const interval = setInterval(() => {
      this.progressBarValue =
        this.progressBarValue + Math.floor(Math.random() * 5);
      if (this.progressBarValue >= 100) {
        console.log(this.progressBarValue);
        this.progressBarValue = 100;
        clearInterval(interval);

        this.router.navigate(['/']);
      }
    }, 50);
  }
}
