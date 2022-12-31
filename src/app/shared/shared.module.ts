import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { WindowComponent } from './window/window.component';
import { FinderComponent } from './programs/finder/finder.component';
import { CalculatorComponent } from './programs/calculator/calculator.component';
import { MapsComponent } from './programs/maps/maps.component';

@NgModule({
  declarations: [
    BackgroundImageComponent,
    ContextMenuComponent,
    WindowComponent,
    FinderComponent,
    CalculatorComponent,
    MapsComponent,
  ],
  imports: [CommonModule, DragDropModule],
  exports: [BackgroundImageComponent, ContextMenuComponent],
})
export class SharedModule {}
