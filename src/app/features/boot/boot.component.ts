import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
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
  isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.elem = this.document.documentElement as HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };
    }
  }

  chkScreenMode() {
    if (this.isBrowser) {
      this.toggleFullScreen();
      this.isFullScreen = true;
      this.navigateToHome();
    }
  }

  toggleFullScreen() {
    if (this.isBrowser) {
      const methodToBeInvoked =
        this.elem.requestFullscreen ||
        this.elem.webkitRequestFullscreen() ||
        this.elem.mozRequestFullScreen() ||
        this.elem.msRequestFullscreen();
      if (methodToBeInvoked) methodToBeInvoked.call(this.elem);
    }
  }

  navigateToHome() {
    if (this.isBrowser) {
      const interval = setInterval(() => {
        this.progressBarValue =
          this.progressBarValue + Math.floor(Math.random() * 5);
        if (this.progressBarValue >= 100) {
          this.progressBarValue = 100;
          clearInterval(interval);

          this.router.navigate(['/desktop']);
        }
      }, 50);
    }
  }
}
