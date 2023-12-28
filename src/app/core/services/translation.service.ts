import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {}

  translateLabels(labels: string[], prefix: string): Promise<string[]> {
    const translatedLabels: string[] = [];

    const translatePromises = labels.map((label) =>
      this.translate
        .get(`${prefix}.${label.replace(/ /g, '_').toUpperCase()}`)
        .toPromise()
        .then((translatedLabel) => {
          translatedLabels.push(translatedLabel);
        })
    );

    return Promise.all(translatePromises).then(() => translatedLabels);
  }
}
