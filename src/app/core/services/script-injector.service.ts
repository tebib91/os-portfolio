import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScriptInjectorService {
constructor(@Inject(DOCUMENT) private document: Document) {}

  inject(trackingId: string) {
    // Create the first script element for gtag.js
    const script1 = this.document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    this.document.head.appendChild(script1);

    // Create the second script element for dataLayer and gtag config
    const script2 = this.document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `;
    this.document.head.appendChild(script2);
  }
}
