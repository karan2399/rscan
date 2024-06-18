import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserManagementModule } from '../tab3/user-management/user-management.module';
import { ReceiptParsedComponent } from './receipt-parsed.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UserManagementModule
  ],
  declarations: [ReceiptParsedComponent]
})
export class ReceiptParsedModule {}
