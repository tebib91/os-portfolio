import { Injectable, inject } from '@angular/core';
import { LanguageService } from './language.service';
import { CvFinder } from '@core/models/cv';
import { me, meFr } from '@core/data/data';
import { BehaviorSubject, Observable } from 'rxjs';

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
