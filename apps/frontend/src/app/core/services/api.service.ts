import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CvFinder } from '../models/cv';
import { CvService } from './cv.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient);
  private cvService = inject(CvService);

  constructor() {}

  getData(): Observable<CvFinder> {
    return this.cvService.currentCv$;
  }
}
