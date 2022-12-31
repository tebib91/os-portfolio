import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { iconsDock } from 'src/app/core/data/data';
import { Icons } from 'src/app/core/models/icons';
import { MenuContext } from 'src/app/core/models/menu';

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

  handleMenu(item: MenuContext) {
    item.label === 'change background' ? this.changeBackground() : null;
  }
  changeBackground() {
    const index = this.getRandomNumber();
    console.log('change background', index);
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
