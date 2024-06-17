import { Component } from '@angular/core';
import { SplitService } from '../services/split.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  itemName: string = '';
  itemPrice: number = 0;
  selectedUsers: string[] = [];
  totalBillAmount: number = 0;

  // userName: string = 'Karan'; 

  showSummary: boolean = false;
  userGroupOwingSummary: { userGroup: string[], totalOwed: number, userDetails: { userName: string, amountOwed: number }[] }[] = [];
  sharedItemsByGroup: { userGroup: string[], items: { itemName: string, itemPrice: number }[] }[] = [];

  totalOwedByUsers: { userName: string, totalOwed: number }[] = [];

  constructor(public splitService: SplitService) {}



  addItem(){

    if (this.selectedUsers.includes('All')) {
      this.selectedUsers = this.splitService.getUsers().filter(user => user !== 'All');
    }


    if (this.itemName && this.itemPrice && this.selectedUsers.length > 0) {
      this.splitService.addItem(this.itemName,this.itemPrice, this.selectedUsers);
      this.itemName = '';
      this.itemPrice = 0;
      this.selectedUsers = [];
    }
    this.showSummaryToUsers();

  }

  showSummaryToUsers(){
    this.showSummary = true;
    this.userGroupOwingSummary = this.splitService.getUserGroupOwingSummary();
    this.totalOwedByUsers = this.splitService.getTotalOwedByEachUser();
    this.totalBillAmount = this.splitService.getTotalBillAmount();
    this.sharedItemsByGroup = this.splitService.getItemsSharedPerGroup();
  }

  deleteItem(item: { itemName: string, itemPrice: number, users: string[] }) {
    this.splitService.deleteItem(item);
    this.showSummaryToUsers();
  }

}
