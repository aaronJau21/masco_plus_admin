import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./layouts/home/home-layout.component'),
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];
