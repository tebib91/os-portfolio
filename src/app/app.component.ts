import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ScriptInjectorService } from './core/services/script-injector.service';
import { SeoService } from './core/services/seo.service';

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
    private seo: SeoService
  ) {
    const trackingId = environment.GA_TRACKING_ID;
    console.log({ environment: environment.production });
    this.script.inject(trackingId);
    this.seo.updateMetaData(this.router.url);
  }
}
