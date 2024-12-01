import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { menusBar } from '@core/data/data';
import { PlatformService } from '@core/services/platform.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class HeaderComponent implements OnInit {
  items = menusBar;
  batteryLevel!: number;
  controlVisible = false;
  currentTime = Date.now();
  showList = false;
  constructor(
    private platformService: PlatformService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.platformService.isBrowser) {
      this.getBatteryLevel();
    }
    this.cd.detectChanges();
  }

  async getBatteryLevel() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((navigator as any).getBattery()) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const battery = await (navigator as any).getBattery();
      this.batteryLevel = battery.level * 100;
      this.cd.detectChanges(); // Add this line
    }
  }
}
