import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
    canActivate: [authGuard]
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./article/articles.routes').then((m) => m.ARTICLES_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
];
