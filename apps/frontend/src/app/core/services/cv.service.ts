import { Injectable, inject } from '@angular/core';
import { me, meFr } from '@core/data/data';
import { CvFinder } from '@core/models/cv';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private languageService = inject(LanguageService);
  private _currentCv = new BehaviorSubject<CvFinder>(me);
  currentCv$: Observable<CvFinder> = this._currentCv.asObservable();

  constructor() {
    this.languageService.languageChange$.subscribe((lang) => {
      this.updateCv(lang);
    });
    this.updateCv(this.languageService.currentLang);
  }

  private updateCv(lang: string) {
    if (lang === 'fr') {
      this._currentCv.next(meFr);
    } else {
      this._currentCv.next(me);
    }
  }
}
