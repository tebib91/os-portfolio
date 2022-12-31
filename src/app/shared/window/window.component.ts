import { MapsComponent } from './../programs/maps/maps.component';
import { FinderComponent } from './../programs/finder/finder.component';
import {
  Component,
  Inject,
  Injectable,
  Injector,
  ReflectiveInjector,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CdkDragHandle } from '@angular/cdk/drag-drop';
import { Program } from 'src/app/core/models/menu';
import { CalculatorComponent } from '../programs/calculator/calculator.component';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent {
  dragPosition = { x: 0, y: 0 };
  public outlet: any;
  public components = [
    { name: 'finder', component: FinderComponent },
    { name: 'maps', component: MapsComponent },
    { name: 'calculator', component: CalculatorComponent },
  ];

  constructor(
    public dialogRef: MatDialogRef<WindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Program,
    injector: Injector
  ) {
    this.outlet = this.components.find(
      (el) => el.name === data.title.toLocaleLowerCase()
    )?.component;
  }

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
