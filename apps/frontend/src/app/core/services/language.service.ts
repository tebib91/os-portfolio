import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);

  currentLang = 'en';
  private _languageChange = new Subject<string>();
  languageChange$ = this._languageChange.asObservable();

  constructor() {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    const savedLang = this.getStoredLang();
    this.use(savedLang || 'en');
  }

  use(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    this._languageChange.next(lang);
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
