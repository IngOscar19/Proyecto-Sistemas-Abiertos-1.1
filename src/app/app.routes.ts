import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./gifs/components/ResultsComponent/ResultsComponent.component').then(m => m.ResultsComponentComponent)
      }
    ]
  },
  {
    path: 'trending',
    loadComponent: () => import('./gifs/pages/trendin-page/trendin-page.component')
  },
  {
    path: 'search',
    loadComponent: () => import('./gifs/pages/search-page/search-page.component')
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];