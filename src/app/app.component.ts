import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { ScriptInjectorService } from '@core/services/script-injector.service';
import { SeoService } from '@core/services/seo.service';
import { TranslateService } from '@ngx-translate/core';
import { env } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'os-front';

  constructor(
    private script: ScriptInjectorService,
    private router: Router,
    private seo: SeoService,
    private translate: TranslateService
  ) {
    const trackingId = environment.GA_TRACKING_ID;
    if (environment.production) {
      this.script.inject(trackingId);
      this.seo.updateMetaData(this.router.url);
    }
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
