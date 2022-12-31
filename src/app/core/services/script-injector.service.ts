import { Injectable } from '@angular/core';

declare var window: { dataLayer: never[] };

@Injectable({
  providedIn: 'root',
})
export class ScriptInjectorService {
  constructor() {}

  inject(trackingId: string) {
    console.log({ trackingId });
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      script.onload = resolve;
      document.head.appendChild(script);
      const dataLayer = [];

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', trackingId);
    });
  }
}
