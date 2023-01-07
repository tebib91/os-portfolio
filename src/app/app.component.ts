import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ScriptInjectorService } from './core/services/script-injector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'os-front';

  constructor(private script: ScriptInjectorService) {
    const trackingId = environment.GA_TRACKING_ID;
    this.script.inject(trackingId);
  }
}
