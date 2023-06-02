import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootComponent } from '@features/boot/boot.component';
import { LoginComponent } from '@features/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'boot', component: BootComponent },
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
  { path: '**', redirectTo: '/boot' },
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
