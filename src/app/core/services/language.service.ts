import { Injectable, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);

  currentLang = 'en';
  constructor() {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    const savedLang = this.getStoredLang();
    this.use(savedLang || 'en');
  }

  use(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    this.storeLang(lang);
  }

  private getStoredLang(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('language');
    }
    return null;
  }

  private storeLang(lang: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', lang);
    }
  }
}
