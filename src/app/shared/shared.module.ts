import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { WindowComponent } from './window/window.component';

@NgModule({
  declarations: [
    BackgroundImageComponent,
    ContextMenuComponent,
    WindowComponent,
  ],
  imports: [CommonModule, DragDropModule],
  exports: [BackgroundImageComponent, ContextMenuComponent],
})
export class SharedModule {}
