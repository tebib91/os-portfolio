import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { TaskbarComponent } from './taskbar/taskbar.component';

const routes: Routes = [
  {
    path: 'desktop',
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatDialogModule,
    HeaderComponent,
    LayoutComponent,
    TaskbarComponent,
  ],
})
export class LayoutModule {}
