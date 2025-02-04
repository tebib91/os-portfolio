import { NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  inject,
  output,
  Renderer2,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-context-menu',
  template: `
    <div #contextMenu class="context-menu">
      <ng-content></ng-content>

      <ul
        class="context-menu-item"
        [style.left.px]="menuLeft"
        [style.top.px]="menuTop"
        *ngIf="isOpen"
      >
        <li>
          <button>New folder</button>
        </li>
        <li>
          <button>Get info</button>
          <button (click)="changeBackground()">Change Wallpaper</button>
        </li>
        <li>
          <button>Sort By</button>
          <button>Show View Option</button>
          <button>Clean Up</button>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./context-menu.component.scss'],
  imports: [NgIf],
})
export class ContextMenuComponent {
  private renderer = inject(Renderer2);

  urlImage!: string;
  lastRandomNumber!: number;
  folders: string[] = [];
  folderCounter = 0;
  menuLeft = 0;
  menuTop = 0;

  readonly contextMenu = viewChild.required<ElementRef>('contextMenu');
  isOpen = false;
  readonly imageUrlChange = output<string>();

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  @HostListener('document:click', ['$event'])
  documentClick() {
    this.hideMenu();
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();

    if (this.isOpen) {
      this.hideMenu();
    } else {
      this.menuLeft = event.clientX;
      this.menuTop = event.clientY;
      this.isOpen = true;
    }
  }

  hideMenu() {
    this.isOpen = false;
  }

  changeBackground() {
    const index = this.getRandomNumber();
    this.urlImage = `/assets/backgrounds/background-${index}.webp`;
    console.log(this.urlImage);

    this.imageUrlChange.emit(this.urlImage);
  }

  getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    while (randomNumber === this.lastRandomNumber) {
      randomNumber = Math.floor(Math.random() * 3) + 1;
    }
    this.lastRandomNumber = randomNumber;
    return randomNumber;
  }

  createFolder() {
    const defaultFolderName = 'New Folder'; // Change this to the desired default name for the folder
    // Add the new folder name to the folders array
    this.folders.push(`${defaultFolderName}_${this.folderCounter++}`);
  }
}
