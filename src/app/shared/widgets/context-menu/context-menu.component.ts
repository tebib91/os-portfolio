import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { menuContext } from '@app/core/data/data';
import { MenuContext } from '@core/models/menu';

@Component({
  selector: 'app-context-menu',
  template: `
    <div class="context-menu" (contextmenu)="openMenu($event)">
      <ng-content></ng-content>
      <ul
        *ngIf="isOpen"
        class="context-menu-items"
        [style.left.px]="menuLeft"
        [style.top.px]="menuTop"
      >
        <li *ngFor="let item of items" (click)="onItemClick(item)">
          {{ item.label }}
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .context-menu {
        position: relative;
      }

      .context-menu-items {
        position: absolute;
        min-width: 200px;
        background-color: rgba(244, 245, 245, 0.95);
        border: 0.5px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.16);
        list-style: none;
        padding: 0;
        margin: 0;
        z-index: 999;
        border-radius: 5px;
      }

      .context-menu-items li {
        padding: 10px;
        cursor: pointer;
      }

      .context-menu-items li:hover {
        background-color: #f0f0f0;
      }
    `,
  ],
})
export class ContextMenuComponent {
  items: MenuContext[] = menuContext;
  @Output() actionSelected: EventEmitter<MenuContext> =
    new EventEmitter<MenuContext>();

  @ViewChild('menu', { static: true }) menu!: ElementRef<HTMLUListElement>;

  isOpen = false;
  menuLeft = 0;
  menuTop = 0;

  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  openMenu(event: MouseEvent) {
    event.preventDefault();
    this.isOpen = true;
    this.menuLeft = event.clientX;
    this.menuTop = event.clientY;

    const clickListener = (event: Event) => {
      if (!this.el.contains(event.target as HTMLInputElement)) {
        this.isOpen = false;
        document.removeEventListener('click', clickListener);
      }
    };
    document.addEventListener('click', clickListener);
  }

  onItemClick(item: MenuContext) {
    this.actionSelected.emit(item);
  }
}
