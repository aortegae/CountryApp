import { Routes } from '@angular/router';
import { CountryLayout } from '../layouts/CountryLayout';

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'capital',
        loadComponent: () => import('./pages/capital'),
      },
      {
        path: 'region',
        loadComponent: () => import('./pages/region'),
      },
      {
        path: 'pais',
        loadComponent: () => import('./pages/pais'),
      },
      {
        path: 'detail/:code',
        loadComponent: () => import('./pages/country-details'),
      },
      {
        path: 'continent',
        loadComponent: () => import('./pages/continent'),
      },
    ],
  },
];

export default countryRoutes;
