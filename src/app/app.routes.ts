import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
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
