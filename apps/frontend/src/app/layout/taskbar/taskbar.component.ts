import { Component, EventEmitter, Output } from '@angular/core';
import { iconsDock } from '@core/data/data';
import { Icons } from '@core/models/icons';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
})
export class TaskbarComponent {
  icons = iconsDock;
  @Output() program = new EventEmitter<Icons>();

  scale = 'normal';

  constructor(public themeService: ThemeService) {}

  onClick(item: Icons) {
    this.scale = 'clicked';
    // handle item click event
    this.program.emit(item);
  }
}
