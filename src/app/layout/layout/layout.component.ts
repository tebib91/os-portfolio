import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Icons } from '@core/models/icons';
import { MenuContext } from '@core/models/menu';
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

  urlImage = '/assets/backgrounds/background-1.webp';
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
      console.info('The dialog was closed', { item, result });
    });
  }

  handleAction(action: MenuContext) {
    // Perform the logic based on the selected action
    if (action.action === 'CF') {
      this.createFolder();
    } else if (action.action === 'CBd') {
      this.changeBackground();
    }
  }

  changeBackground() {
    const index = this.getRandomNumber();
    this.urlImage = `/assets/backgrounds/background-${index}.webp`;
  }

  getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    while (randomNumber === this.lastRandomNumber) {
      randomNumber = Math.floor(Math.random() * 4) + 1;
    }
    this.lastRandomNumber = randomNumber;
    return randomNumber;
  }

  createFolder() {
    const defaultFolderName = 'New Folder'; // Change this to the desired default name for the folder
    // Add the new folder name to the folders array
    this.folders.push(`${defaultFolderName}_${this.folderCounter++}`);
    console.log(this.folders);
  }
}
