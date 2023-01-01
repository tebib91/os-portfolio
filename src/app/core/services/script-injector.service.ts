import { Injectable } from '@angular/core';

declare var window: { dataLayer: never[] };

@Injectable({
  providedIn: 'root',
})
export class ScriptInjectorService {
  constructor() {}

  inject(trackingId: string) {
    console.log({ trackingId });
    const script = this.document.createElement('script');
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${trackingId}');`;
    this.document.head.appendChild(script);

  }
}
