import { Component, inject, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LanguageService } from '@core/services/language.service';
import { ScriptInjectorService } from '@core/services/script-injector.service';
import { SeoService } from '@core/services/seo.service';
import { environment } from '@env/environment';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnDestroy {
  private script = inject(ScriptInjectorService);
  private router = inject(Router);
  private seo = inject(SeoService);
  private language = inject(LanguageService);
  private destroy$ = new Subject();

  title = 'Ahmed Tabib | Fullstack Developer JavaScript';
  constructor() {
    const trackingId = environment.GA_TRACKING_ID;
    this.script.inject(trackingId);
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
        takeUntil(this.destroy$),
      )
      .subscribe((event: NavigationEnd) => {
        // Explicit type for the event
        this.seo.updateMetaData(event.urlAfterRedirects);
      });
  }
  ngOnDestroy() {
    this.destroy$.next('');
  }
}
