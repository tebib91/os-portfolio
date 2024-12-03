import { Injectable, Renderer2, RendererFactory2, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private snackBar = inject(MatSnackBar);
  private document = inject<Document>(DOCUMENT);

  isDarkMode = false;
  darkClass = 'macos-dark-theme';
  lightClass = 'macos-light-theme';

  private renderer: Renderer2;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  constructor() {
    const rendererFactory = inject(RendererFactory2);

    // Get an instance of Renderer2
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(this.document.body, 'dark-theme');
      this.snackBar.open('Dark mode enabled', '', {
        duration: 1000,
        verticalPosition: 'top',
      });
    } else {
      this.renderer.removeClass(this.document.body, 'dark-theme');

      this.snackBar.open('Light mode enabled', '', {
        duration: 1000,
        verticalPosition: 'top',
      });
    }
  }
}
