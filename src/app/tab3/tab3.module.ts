import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { UserManagementModule } from './user-management/user-management.module';
import { InnerMenuModule } from './inner-menu/inner-menu.module';
import { SplitwiseModule } from './splitwise/splitwise.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    UserManagementModule,
    InnerMenuModule,
    SplitwiseModule,
    RouterModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
