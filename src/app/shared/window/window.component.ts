import { MapsComponent } from '@shared/programs/maps/maps.component';
import { FinderComponent } from '@shared/programs/finder/finder.component';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Program } from '@core/models/menu';
import { CalculatorComponent } from '../programs/calculator/calculator.component';

import { Overlay, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  outlet: any | undefined;
  dragPosition = { x: 0, y: 0 };
  public components = [
    { name: 'finder', component: FinderComponent },
    { name: 'maps', component: MapsComponent },
    { name: 'calculator', component: CalculatorComponent },
  ];

  maximized = false;
  initialWidth?: string;
  initialHeight?: string;
  private _overlayRef!: OverlayRef;

  constructor(
    public dialogRef: MatDialogRef<WindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Program,
    private _overlay: Overlay
  ) {
    this.outlet = this.components.find(
      (el) => el.name === data?.title?.toLocaleLowerCase()
    )?.component;
  }

  onMinimizeClick(): void {
    // Minimize the window
  }

  onMaximizeClick(): void {
    // Maximize the window
    this.maximized = !this.maximized;
    this.maximized ? this.fullscreen() : this.exitFullscreen();
  }

  fullscreen() {
    this.dialogRef.addPanelClass('full-width');
  }
  exitFullscreen() {
    this.dialogRef.removePanelClass('full-width');
    this._overlayRef = this._overlay.create({
      positionStrategy: this._overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
    });
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
