import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
export interface RedirectionExtras extends NavigationExtras {
  target?: string;
}

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  readonly router = inject(Router);
  readonly document = inject<Document>(DOCUMENT);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  /** The Window object from Document defaultView */
  get window(): Window {
    return this.document.defaultView!;
  }

  /** Returns true if the given url looks external */
  public external(url: string): boolean {
    return /^http(?:s)?:\/{2}\S+$/.test(url);
  }

  /** Redirects to the specified external link with the mediation of the router */
  public redirect(url: string, target = '_blank'): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        resolve(!!this.window.open(url, target));
      } catch (e) {
        reject(e);
      }
    });
  }

  /** Navigates to the given url, redirecting when necessary
   * @param url An absolute URL. The function does not apply any delta to the current URL.
   * When starting with 'http(s)://' triggers the external redirection.
   * @param extras (optional). An object containing properties that modify the navigation strategy.
   * The function ignores any properties that would change the provided URL.
   */
  public navigate(url: string, extras?: RedirectionExtras): Promise<boolean> {
    return this.external(url)
      ? // Redirects to external link
        this.redirect(url, extras && extras.target)
      : // Navigates with the router otherwise
        this.router.navigateByUrl(url, extras);
  }
}
