import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Icons } from 'src/app/core/models/icons';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],

})
export class TaskbarComponent {
  @Input() icons!: any;
  scale = 'normal';

  constructor( public themeService: ThemeService) { }

  ngOnInit() { }

  onClick(item?: unknown) {
    this.scale = 'clicked';
    // handle item click event
  }

}
