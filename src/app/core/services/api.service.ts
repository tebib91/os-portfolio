import { CvFinder } from './../models/cv';
import { me } from './../data/data';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<CvFinder> {
    return of(me);
  }
}
