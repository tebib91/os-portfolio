import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  Renderer2,
  ViewChild,
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
})
export class ContextMenuComponent {
  urlImage!: string;
  lastRandomNumber!: number;
  folders: string[] = [];
  folderCounter = 0;
  menuLeft = 0;
  menuTop = 0;

  @ViewChild('contextMenu') contextMenu!: ElementRef;
  isOpen = false;
  @Output() imageUrlChange = new EventEmitter<string>();

  constructor(private renderer: Renderer2) {}

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
    this.imageUrlChange.emit(this.urlImage);
  }

  getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
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
  }
}
