import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CdkDragHandle } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent {
  dragPosition = { x: 0, y: 0 };

  constructor(
    public dialogRef: MatDialogRef<WindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onMinimizeClick(): void {
    // Minimize the window
  }

  onMaximizeClick(): void {
    // Maximize the window
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
