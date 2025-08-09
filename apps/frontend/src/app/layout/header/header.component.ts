import { DatePipe, DecimalPipe, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { menusBar } from '@core/data/data';
import { PlatformService } from '@core/services/platform.service';
import { ControlCenterComponent } from '../../shared/widgets/control-center/control-center.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgStyle, ControlCenterComponent, DecimalPipe, DatePipe],
})
export class HeaderComponent implements OnInit {
  private platformService = inject(PlatformService);
  private cd = inject(ChangeDetectorRef);

  items = menusBar;
  batteryLevel = signal<number | null>(null);
  controlVisible = false;
  currentTime = Date.now();
  showList = false;

  constructor() {}

  ngOnInit(): void {
    if (this.platformService.isBrowser) {
      this.getBatteryLevel();
      this.updateTime();
      // Update time every minute
      setInterval(() => this.updateTime(), 60000);
    }
    this.cd.detectChanges();
  }

  updateTime(): void {
    this.currentTime = Date.now();
    this.cd.detectChanges();
  }

  async getBatteryLevel() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((navigator as any).getBattery()) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const battery = await (navigator as any).getBattery();
      this.batteryLevel.set(battery.level * 100);
      this.cd.detectChanges();
    }
  }
}
