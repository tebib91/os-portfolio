import { PlatformService } from '@core/services/platform.service';
import { Component } from '@angular/core';
import { menusBar } from '@core/data/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items = menusBar;
  batteryLevel!: number;
  controlVisible = false;
  currentTime = Date.now();

  constructor(private platformService: PlatformService) {
    this.platformService.isBrowser ?? this.getBatteryLevel();
  }

  async getBatteryLevel() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((navigator as any).getBattery()) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const battery = await (navigator as any).getBattery();
      this.batteryLevel = battery.level * 100;
    }
  }
}
