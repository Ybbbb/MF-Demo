import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'mfe',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './MFEModule',
      }).then((m) => m.MfeModule),
  },
  // {
  //   path: 'mfe',
  //   loadChildren: () =>
  //     import('componentLib/MFEModule').then((m) => m.MfeModule),
  // },
];
