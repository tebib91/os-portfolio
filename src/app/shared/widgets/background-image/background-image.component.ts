import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-background-image',
  template: `
    <div
      [style.background-image]="'url(' + imageUrl + ')'"
      [style.background-size]="size"
      [style.background-position]="position"
      [style.background-repeat]="repeat"
      class="full-screen-background"
    >
      <!-- Render the folder icons -->
      <div class="folder-icons-container">
        <div *ngFor="let folder of folders" class="folder-icon">
          <img src="assets/icons-system/folder.svg" alt="Folder Icon" />
          <span>{{ folder }}</span>
        </div>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./background-image.component.scss'],
})
export class BackgroundImageComponent {
  @Input() imageUrl = '/assets/backgrounds/background-1.webp';
  @Input() size!: string;
  @Input() position!: string;
  @Input() repeat!: string;
  @Input() folders!: string[];
}
