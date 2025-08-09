import { NgFor } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-background-image',
  template: `
    <div
      [style.background-image]="'url(' + imageUrl() + ')'"
      [style.background-size]="size()"
      [style.background-position]="position()"
      [style.background-repeat]="repeat()"
      class="full-screen-background"
    >
      <!-- Render the folder icons -->
      <div class="folder-icons-container">
        <div *ngFor="let folder of folders()" class="folder-icon">
          <img src="assets/icons-system/folder.svg" alt="Folder Icon" />
          <span>{{ folder }}</span>
        </div>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./background-image.component.scss'],
  imports: [NgFor],
})
export class BackgroundImageComponent {
  readonly imageUrl = input('/assets/backgrounds/background-1.webp');
  readonly size = input.required<string>();
  readonly position = input.required<string>();
  readonly repeat = input.required<string>();
  readonly folders = input.required<string[]>();
}
