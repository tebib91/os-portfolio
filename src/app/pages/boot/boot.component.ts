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
  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  fullscreenmodes() {
    this.chkScreenMode();
  }

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: any,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {}

  chkScreenMode() {
    if (document.fullscreenElement) {
      //fullscreen
      this.isFullScreen = true;
      this.navigateToHome();
    } else {
      //not in full screen
      this.isFullScreen = false;
    }
  }
  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }
  navigateToHome() {
    let interval = setInterval(() => {
      this.progressBarValue =
        this.progressBarValue + Math.floor(Math.random() * 10);
      if (this.progressBarValue >= 100) {
        console.log(this.progressBarValue);
        this.progressBarValue = 100;
        clearInterval(interval);

        this.router.navigate(['/']);
      }
    }, 50);
  }
}
