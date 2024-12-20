import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { menusBar } from '@core/data/data';
import { PlatformService } from '@core/services/platform.service';
import { NgFor, NgIf, NgStyle, DecimalPipe, DatePipe } from '@angular/common';
import { ControlCenterComponent } from '../../shared/widgets/control-center/control-center.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgFor,
    NgIf,
    NgStyle,
    ControlCenterComponent,
    DecimalPipe,
    DatePipe,
  ],
})
export class HeaderComponent implements OnInit {
  private platformService = inject(PlatformService);
  private cd = inject(ChangeDetectorRef);

  items = menusBar;
  batteryLevel!: number;
  controlVisible = false;
  currentTime = Date.now();
  showList = false;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  constructor() {}

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
