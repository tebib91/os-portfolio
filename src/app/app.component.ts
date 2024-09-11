import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScriptInjectorService } from '@core/services/script-injector.service';
import { SeoService } from '@core/services/seo.service';
import { environment } from '@env/environment';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'Ahmed Tabib | Fullstack Developer JavaScript';
  private destroy$ = new Subject();

  constructor(
    private script: ScriptInjectorService,
    private router: Router,
    private seo: SeoService,
  ) {
    const trackingId = environment.GA_TRACKING_ID;
    this.script.inject(trackingId);
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ), // Type guard
        takeUntil(this.destroy$),
      )
      .subscribe((event: NavigationEnd) => {
        // Explicit type for the event
        this.seo.updateMetaData(event.urlAfterRedirects);
      });
  }

  ngOnDestroy() {
    this.destroy$.next('');
    this.destroy$.complete();
  }
}
