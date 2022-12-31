import { Icons } from 'src/app/core/models/icons';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
})
export class TaskbarComponent {
  @Input() icons!: Icons[] | null;
  @Output() program = new EventEmitter<Icons>();

  scale = 'normal';

  constructor(public themeService: ThemeService) {}

  onClick(item: Icons) {
    this.scale = 'clicked';
    // handle item click event
    this.program.emit(item);
  }
}
