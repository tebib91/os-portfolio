import { Component, OnDestroy, inject as inject_1 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScriptInjectorService } from '@core/services/script-injector.service';
import { SeoService } from '@core/services/seo.service';
import { environment } from '@env/environment';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnDestroy {
  private script = inject_1(ScriptInjectorService);
  private router = inject_1(Router);
  private seo = inject_1(SeoService);

  title = 'Ahmed Tabib | Fullstack Developer JavaScript';
  private destroy$ = new Subject();

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
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
