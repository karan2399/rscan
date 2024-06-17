import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InnerMenuComponent } from './inner-menu.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  exports:
  [InnerMenuComponent],
  declarations: [InnerMenuComponent]
})
export class InnerMenuModule {}
