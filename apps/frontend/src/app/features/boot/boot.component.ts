import { DOCUMENT, isPlatformBrowser, NgIf } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';

import { MatProgressBar } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '@core/services/language.service';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.scss'],
  imports: [NgIf, MatProgressBar, TranslateModule],
})
export class BootComponent implements OnInit {
  private router = inject(Router);
  private document = inject<Document>(DOCUMENT);
  private platformId = inject(PLATFORM_ID);
  public languageService = inject(LanguageService);

  progressBarValue = signal(0);
  isFullScreen = false;
  elem!: HTMLElement & {
    mozRequestFullScreen(): Promise<void>;
    webkitRequestFullscreen(): Promise<void>;
    msRequestFullscreen(): Promise<void>;
  };
  isBrowser: boolean;

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
        this.elem.webkitRequestFullscreen ||
        this.elem.mozRequestFullScreen ||
        this.elem.msRequestFullscreen;
      if (methodToBeInvoked) {
        methodToBeInvoked.call(this.elem);
      }
    }
  }

  navigateToHome() {
    if (this.isBrowser) {
      const interval = setInterval(() => {
        this.progressBarValue.update((v) => v + Math.floor(Math.random() * 5));
        if (this.progressBarValue() >= 100) {
          this.progressBarValue.set(100);
          clearInterval(interval);

          this.router.navigate(['/desktop']);
        }
      }, 50);
    }
  }
}
