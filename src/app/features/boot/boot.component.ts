import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.scss'],
})
export class BootComponent implements OnInit {
  progressBarValue = 0;

  isFullScreen = false;
  elem!: HTMLElement & {
    mozRequestFullScreen(): Promise<void>;
    webkitRequestFullscreen(): Promise<void>;
    msRequestFullscreen(): Promise<void>;
  };

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {
    this.elem = document.documentElement as HTMLElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };
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
