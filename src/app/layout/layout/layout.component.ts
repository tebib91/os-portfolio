import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { iconsDock } from '@app/core/data/data';
import { Icons } from '@core/models/icons';
import { WindowComponent } from '@shared/window/window.component';
import { version } from 'src/version';
import { ThemeService } from '../../core/services/theme.service';
import { BackgroundImageComponent } from '../../shared/widgets/background-image/background-image.component';
import { ContextMenuComponent } from '../../shared/widgets/context-menu/context-menu.component';
import { HeaderComponent } from '../header/header.component';
import { TaskbarComponent } from '../taskbar/taskbar.component';
export interface TaskbarIcon {
  icon: string;
  label: string;
  id?: string;
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ContextMenuComponent,
    BackgroundImageComponent,
    HeaderComponent,
    TaskbarComponent,
  ],
})
export class LayoutComponent {
  dialog = inject(MatDialog);
  themeService = inject(ThemeService);

  currentApplicationVersion = version;

  urlImage = '/assets/backgrounds/background-1.webp';
  lastRandomNumber!: number;
  folders: string[] = [];
  folderCounter = 0;
  iconsDock: Icons[];

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  constructor() {
    this.handleProgram({
      icon: 'finder.png',
      label: 'Finder',
      id: 'FinderComponent',
    });
    this.iconsDock = iconsDock;
  }

  handleProgram(icon: Icons): void {
    const dialogRef = this.dialog.open(WindowComponent, {
      data: {
        title: icon.label,
        icon: icon.icon,
        program: icon.id,
      },
      hasBackdrop: false,
      panelClass: 'dialog-panel',
    });

    dialogRef.afterClosed();
  }

  handleThemeToggle(isDarkTheme: boolean) {
    console.log('Dark theme enabled:', isDarkTheme);
    this.themeService.toggleDarkMode();
  }
}
