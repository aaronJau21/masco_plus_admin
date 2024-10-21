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
    children: [
      {
        path: 'home',
        title: 'Inicio',
        data: { icon: 'home' },
        loadComponent: () => import('./pages/home/home.component'),
      },
      {
        path: 'brand',
        title: 'Marcas',
        data: { icon: 'inventory_2' },
        loadComponent: () => import('./pages/marcas/marcas.component'),
      },
      {
        path: '',
        redirectTo: '/dashboard/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
