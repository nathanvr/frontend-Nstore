import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () =>
      import('./pages/home/home.component').then((h) => h.HomeComponent),
  },

  {
    path: 'sales',
    loadComponent: () =>
      import('./pages/sales/sales.component').then((h) => h.SalesComponent),
  },
];
