import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mfe',
    loadChildren: () => import('./mfe/mfe.module').then((m) => m.MfeModule),
  },
];
