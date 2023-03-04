import { CvFinder } from './../../../core/models/cv';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Observable } from 'rxjs';
import { RedirectService } from 'src/app/core/services/redirect.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
})
export class FinderComponent {
  data$: Observable<CvFinder> | undefined;

  constructor(private api: ApiService, private redirect: RedirectService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.data$ = this.api.getData();
  }

  navigateUrl(url: string) {
    console.log({ url });
    url ? this.redirect.navigate(url) : null;
  }
}
