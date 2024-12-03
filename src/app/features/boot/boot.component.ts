import { DOCUMENT, isPlatformBrowser, NgIf } from '@angular/common';
import {
  Component,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.scss'],
  imports: [NgIf, MatProgressBar],
})
export class BootComponent implements OnInit {
  private router = inject(Router);
  private document = inject<Document>(DOCUMENT);
  private renderer2 = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);

  progressBarValue = 0;
  isFullScreen = false;
  elem!: HTMLElement & {
    mozRequestFullScreen(): Promise<void>;
    webkitRequestFullscreen(): Promise<void>;
    msRequestFullscreen(): Promise<void>;
  };
  isBrowser: boolean;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
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
