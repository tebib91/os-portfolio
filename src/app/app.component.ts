import { Component, inject, DestroyRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScriptInjectorService } from '@core/services/script-injector.service';
import { SeoService } from '@core/services/seo.service';
import { LanguageService } from '@core/services/language.service';
import { environment } from '@env/environment';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  private language = inject_1(LanguageService);


  title = 'Ahmed Tabib | Fullstack Developer JavaScript';
  constructor() {
    const trackingId = environment.GA_TRACKING_ID;
    this.script.inject(trackingId);
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event: NavigationEnd) => {
        // Explicit type for the event
        this.seo.updateMetaData(event.urlAfterRedirects);
      });
  }
}
