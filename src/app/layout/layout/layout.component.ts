import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Icons } from '@core/models/icons';
import { WindowComponent } from '@shared/window/window.component';
import { version } from 'src/version';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  currentApplicationVersion = version;

  urlImage = '/assets/backgrounds/background-4.webp';
  lastRandomNumber!: number;
  folders: string[] = [];
  folderCounter = 0;
  constructor(public dialog: MatDialog) {
    this.openDialog({
      icon: 'finder.png',
      label: 'Finder',
      component: 'FinderComponent',
    });
  }

  openDialog(item: Icons): void {
    const dialogRef = this.dialog.open(WindowComponent, {
      data: {
        title: item.label,
        icon: item.icon,
        program: item.component,
      },
      hasBackdrop: false,
      panelClass: 'dialog-panel',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.info('The dialog was closed');
    });
  }
}
