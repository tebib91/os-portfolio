import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent {}
