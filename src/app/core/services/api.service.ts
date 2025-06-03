import { CvFinder } from './../models/cv';
import { me } from './../data/data';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private httpClient = inject(HttpClient);

  constructor() {}

  getData(): Observable<CvFinder> {
    return of(me);
  }
}
