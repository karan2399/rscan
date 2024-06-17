import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule),
      },
      {
        path: 'split',
        loadChildren: () => import('./splitwise/splitwise.module').then(m => m.SplitwiseModule)
      },
      {
        path: '',
        redirectTo: 'split',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
