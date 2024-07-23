import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeComponent } from './mfe.component';
import { RouterModule, Routes } from '@angular/router';
import { MfeStandaloneComponent } from './mfe-standalone/mfe-standalone.component';

export const routes: Routes = [
  {
    path: '',
    component: MfeComponent,
  },
  // {
  //   path: 'standalone',
  //   component: MfeStandaloneComponent,
  // },
];

@NgModule({
  declarations: [MfeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MfeModule {}
