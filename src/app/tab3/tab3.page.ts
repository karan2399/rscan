import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SplitService } from '../services/split.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private menu: MenuController) { }


  closeMenu(){
    this.menu.close();
  }

}
