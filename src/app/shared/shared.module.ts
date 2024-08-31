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
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withJsonpSupport,
} from '@angular/common/http';
import { WindowHeaderComponent } from './window/window-header/window-header.component';

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
    WindowHeaderComponent,
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
  imports: [
    CommonModule,
    DragDropModule,
    MatProgressBarModule,
    MatTooltipModule,
    TranslateModule,
    GoogleMapsModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi(), withJsonpSupport())],
})
export class SharedModule {}
