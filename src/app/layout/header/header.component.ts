import { Component } from '@angular/core';
import { menusBar } from 'src/app/core/data/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items = menusBar;
  currentTime = Date.now();
}
