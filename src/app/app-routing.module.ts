import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './includes/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./modules/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'rover',
        loadChildren: () =>
          import('./modules/rover/rover.module').then((m) => m.RoverModule),
      },
      {
        path: 'photo',
        loadChildren: () =>
          import('./modules/photo/photo.module').then((m) => m.PhotoModule),
      },
      {
        path: '**',
        redirectTo: '/auth',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
