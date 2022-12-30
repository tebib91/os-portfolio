import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';



@NgModule({
  declarations: [


    BackgroundImageComponent,
      ContextMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackgroundImageComponent,
    ContextMenuComponent
  ]
})
export class SharedModule { }
