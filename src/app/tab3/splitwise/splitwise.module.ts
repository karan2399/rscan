import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplitwiseComponent } from './splitwise.component';
import { RouterModule } from '@angular/router';
import { SplitwiseRoutingModule } from './splitwise-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    SplitwiseRoutingModule
  ],
  declarations: [SplitwiseComponent],
  exports:[
      SplitwiseComponent
  ]
 
})
export class SplitwiseModule {}
