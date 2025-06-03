import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [NgIf],
})
export class LoginComponent {
  private router = inject(Router);

  constructor() {}

  openDesktop() {
    this.router.navigate(['/']);
  }
}
