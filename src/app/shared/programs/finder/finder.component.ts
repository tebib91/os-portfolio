import { CvFinder } from '@core/models/cv';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';
import { RedirectService } from '@core/services/redirect.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
})
export class FinderComponent implements OnInit {
  data$: Observable<CvFinder> | undefined;

  constructor(private api: ApiService, private redirect: RedirectService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.data$ = this.api.getData();
  }

  navigateUrl(url: string) {
    url ? this.redirect.navigate(url) : null;
  }
}
