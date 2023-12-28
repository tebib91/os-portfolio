import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirstTimeVisitGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  canActivate(): boolean {
    // Default to true for server-side rendering or any other environments
    let canActivateResult = true;

    if (isPlatformBrowser(this.platformId)) {
      // Check local storage if the user has visited before
      if (localStorage.getItem('visitedBefore') === 'true') {
        // If visited, redirect to desktop and prevent navigating to boot
        this.router.navigate(['/desktop']);
        canActivateResult = false;
      } else {
        // First time visit, set the flag and let the navigation to boot continue
        localStorage.setItem('visitedBefore', 'true');
        canActivateResult = true;
      }
    }
    return canActivateResult;
  }
}
