import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

// import { TaskbarComponent } from 'taskbar-angular'; // Import the standalone component
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

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
  ],
})
export class LayoutModule {}
