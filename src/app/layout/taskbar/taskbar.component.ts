import { Icons } from 'src/app/core/models/icons';
import { Component, Input } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],

})
export class TaskbarComponent {
  @Input() icons!: Icons[];
  scale = 'normal';

  constructor( public themeService: ThemeService) { }


  onClick() {
    this.scale = 'clicked';
    // handle item click event
  }

}
