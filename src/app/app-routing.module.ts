import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootComponent } from '@features/boot/boot.component';
import { LoginComponent } from '@features/login/login.component';
import { FirstTimeVisitGuard } from './core/first-time-visit.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'boot',
    component: BootComponent,
    canActivate: [FirstTimeVisitGuard],
  },
  {
    path: '',
    redirectTo: '/boot',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
