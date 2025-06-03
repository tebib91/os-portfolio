import { CvFinder } from './../models/cv';
import { me, meFr } from './../data/data';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient);
  private languageService = inject(LanguageService);

  constructor() {}

  getData(): Observable<CvFinder> {
    const lang = this.languageService.currentLang;
    return of(lang === 'fr' ? meFr : me);
  }
}
