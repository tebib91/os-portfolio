import { GoogleMapsModule } from '@angular/google-maps';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageComponent } from './widgets/background-image/background-image.component';
import { WindowComponent } from './window/window.component';
import { FinderComponent } from './programs/finder/finder.component';
import { CalculatorComponent } from './programs/calculator/calculator.component';
import { MapsComponent } from './programs/maps/maps.component';
import { ControlCenterComponent } from './widgets/control-center/control-center.component';
import { BootComponent } from '@features/boot/boot.component';
import { LoginComponent } from '@features/login/login.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NotesComponent } from './widgets/notes/notes.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContextMenuComponent } from './widgets/context-menu/context-menu.component';
import { ExperienceComponent } from './programs/experience/experience.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BackgroundImageComponent,
    WindowComponent,
    FinderComponent,
    CalculatorComponent,
    MapsComponent,
    ControlCenterComponent,
    LoginComponent,
    BootComponent,
    NotesComponent,
    ContextMenuComponent,
    ExperienceComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatProgressBarModule,
    MatTooltipModule,
    TranslateModule,
    HttpClientJsonpModule,
    HttpClientModule,
    GoogleMapsModule,
  ],
  exports: [
    BackgroundImageComponent,
    ContextMenuComponent,
    ControlCenterComponent,
    ExperienceComponent,
    LoginComponent,
    BootComponent,
    TranslateModule,
    MatTooltipModule,
    MatProgressBarModule,
  ],
})
export class SharedModule {}
