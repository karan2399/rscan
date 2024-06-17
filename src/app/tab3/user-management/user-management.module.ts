import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserManagementComponent } from './user-management.component';
import { RouterModule } from '@angular/router';
import { UserManagementRoutingModule } from './user-management-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    UserManagementRoutingModule
  ],
  declarations: [UserManagementComponent],
  exports :[
      UserManagementComponent
  ]
})
export class UserManagementModule {}
