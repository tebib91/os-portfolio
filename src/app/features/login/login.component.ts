import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [NgIf],
})
export class LoginComponent {
  constructor(private router: Router) {}

  openDesktop() {
    this.router.navigate(['/']);
  }
}
