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
    component: LayoutComponent,
  },
];

@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatDialogModule,
    // TaskbarComponent,
  ],
})
export class LayoutModule {}
