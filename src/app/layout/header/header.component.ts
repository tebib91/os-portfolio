import { Component } from '@angular/core';
import { menusBar } from 'src/app/core/data/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items = menusBar;
  batteryLevel!: number;

  currentTime = Date.now();

  constructor() {
    this.getBatteryLevel();
  }

  async getBatteryLevel() {
    if ((navigator as any).getBattery) {
      const battery = await (navigator as any).getBattery();
      this.batteryLevel = battery.level * 100;
      console.log(this.batteryLevel);
    }
  }
}
