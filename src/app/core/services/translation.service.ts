import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translate = inject(TranslateService);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  translateLabels(labels: string[], prefix: string): Promise<string[]> {
    const translatedLabels: string[] = [];

    const translatePromises = labels.map((label) =>
      this.translate
        .get(`${prefix}.${label.replace(/ /g, '_').toUpperCase()}`)
        .toPromise()
        .then((translatedLabel) => {
          translatedLabels.push(translatedLabel);
        }),
    );

    return Promise.all(translatePromises).then(() => translatedLabels);
  }
}
