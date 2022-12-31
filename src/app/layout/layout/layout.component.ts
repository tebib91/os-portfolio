import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { iconsDock } from 'src/app/core/data/data';
import { Icons } from 'src/app/core/models/icons';
import { MenuContext } from 'src/app/core/models/menu';
import { WindowComponent } from 'src/app/shared/window/window.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  items: MenuContext[] = [{ label: 'change background' }, { label: 'Print' }];

  iconsTaskbar$: Observable<Icons[]> = of(iconsDock);

  urlImage = '/assets/backgrounds/background-1.webp';
  lastRandomNumber!: number;
  constructor(public dialog: MatDialog) {}

  handleMenu(item: MenuContext) {
    item.label === 'change background' ? this.changeBackground() : null;
  }

  openDialog(item: Icons): void {
    const dialogRef = this.dialog.open(WindowComponent, {
      data: {
        title: item.label,
        icon: item.icon,
        program: item.component,
      },
      hasBackdrop: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.info('The dialog was closed', { item, result });
    });
  }

  changeBackground() {
    const index = this.getRandomNumber();
    this.urlImage = `/assets/backgrounds/background-${index}.webp`;
  }

  getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    while (randomNumber === this.lastRandomNumber) {
      randomNumber = Math.floor(Math.random() * 4) + 1;
    }
    this.lastRandomNumber = randomNumber;
    return randomNumber;
  }
}
