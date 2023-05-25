import { Icons } from '@core/models/icons';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';
import { TranslationService } from '@core/services/translation.service';
import { iconsDock } from '@app/core/data/data';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
})
export class TaskbarComponent implements OnInit {
  icons = iconsDock;
  @Output() program = new EventEmitter<Icons>();

  scale = 'normal';

  constructor(
    public themeService: ThemeService,
    private translationService: TranslationService
  ) {}

  onClick(item: Icons) {
    this.scale = 'clicked';
    // handle item click event
    this.program.emit(item);
  }

  ngOnInit(): void {
    const labels = this.icons.map((icon) => icon.label);
    this.translationService
      .translateLabels(labels, 'ICONS')
      .then((translatedLabels) => {
        for (let i = 0; i < this.icons.length; i++) {
          this.icons[i] = { ...this.icons[i], label: translatedLabels[i] };
        }
      });
  }
}
