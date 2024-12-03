import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  private readonly platformId = inject<Record<string, object>>(PLATFORM_ID);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  public get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  public get isServer(): boolean {
    return isPlatformServer(this.platformId);
  }
}
