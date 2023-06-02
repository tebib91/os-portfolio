import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '@app/shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { TaskbarComponent } from './taskbar/taskbar.component';

const routes: Routes = [
  {
    path: 'desktop',
    component: LayoutComponent,
  },
];

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, TaskbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatDialogModule,
  ],
})
export class LayoutModule {}
