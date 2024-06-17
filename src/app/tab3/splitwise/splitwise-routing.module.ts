import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplitwiseComponent } from './splitwise.component';

const routes: Routes = [
  {
    path: '',
    component: SplitwiseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplitwiseRoutingModule {}
