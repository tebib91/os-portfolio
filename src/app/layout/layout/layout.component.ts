import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { iconsDock } from '@app/core/data/data';
import { Icons } from '@core/models/icons';
import { WindowComponent } from '@shared/window/window.component';
import { version } from 'src/version';
import { ThemeService } from '../../core/services/theme.service';
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
})
export class LayoutComponent {
  currentApplicationVersion = version;

  urlImage = '/assets/backgrounds/background-1.webp';
  lastRandomNumber!: number;
  folders: string[] = [];
  folderCounter = 0;
  iconsDock: Icons[];
  constructor(public dialog: MatDialog, public themeService: ThemeService) {
    this.handleProgram({
      icon: 'finder.png',
      label: 'Finder',
      id: 'FinderComponent',
    });
    this.iconsDock = iconsDock;
  }

  handleProgram(icon: Icons) {
    console.log('Program clicked:', icon);
    const dialogRef = this.dialog.open(WindowComponent, {
      data: {
        title: icon.label,
        icon: icon.icon,
        program: icon.id,
      },
      hasBackdrop: false,
      panelClass: 'dialog-panel',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.info('The dialog was closed', { icon, result });
    });
  }

  handleThemeToggle(isDarkTheme: boolean) {
    console.log('Dark theme enabled:', isDarkTheme);
    this.themeService.toggleDarkMode();
  }
}
