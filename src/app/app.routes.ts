import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: 'dashboard',
        loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'),
        children: [
            {
                path:'search',
                loadComponent: () => import('./gifs/pages/search-page/search-page.component')
         
            },
            {
                path:'trending',
                loadComponent: () => import('./gifs/pages/trendin-page/trendin-page.component')
            },
        ],
            
        
    },
    {path: '**', redirectTo: 'dashboard' }
];
