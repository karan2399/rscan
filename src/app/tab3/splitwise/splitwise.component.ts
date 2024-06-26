import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.modal';
import { SplitService } from 'src/app/services/split.service';

@Component({
  selector: 'app-splitwise',
  templateUrl: './splitwise.component.html',
  styleUrls: ['./splitwise.component.scss'],
})
export class SplitwiseComponent  implements OnInit {
  itemName: string = '';
  itemPrice: number = 0;
  selectedUsers: string[] = [];
  totalBillAmount: number = 0;

  taxOptions = [0, 5, 13, 15, 20];

  // userName: string = 'Karan'; 

  showSummary: boolean = false;
  userGroupOwingSummary: { userGroup: string[], totalOwed: number, userDetails: { userName: string, amountOwed: number }[] }[] = [];
  sharedItemsByGroup: { userGroup: string[], items: { itemName: string, itemPrice: number, taxPercent: number, totalPrice: number }[] }[] = [];

  totalOwedByUsers: { userName: string, totalOwed: number, totalTax: number }[] = [];

  itemTax = 0;

  constructor(public splitService: SplitService) {}

  ngOnInit(): void {
      
  }


  addItem(){

    if (this.selectedUsers.includes('All')) {
      this.selectedUsers = this.splitService.getUsers().filter(user => user !== 'All');
    }


    if (this.itemName && this.itemPrice && this.selectedUsers.length > 0) {
      this.splitService.addItem(this.itemName,this.itemPrice, this.selectedUsers,this.itemTax);
      this.itemName = '';
      this.itemPrice = 0;
      this.selectedUsers = [];
    }
    this.showSummaryToUsers();
    this.itemTax = 0;

  }

  showSummaryToUsers(){
    this.showSummary = true;
    this.userGroupOwingSummary = this.splitService.getUserGroupOwingSummary();
    this.totalOwedByUsers = this.splitService.getTotalOwedByEachUser();
    this.totalBillAmount = this.splitService.getTotalBillAmount();
    this.sharedItemsByGroup = this.splitService.getItemsSharedPerGroup();
  }

  deleteItem(item: Item) {
    this.splitService.deleteItem(item);
    this.showSummaryToUsers();
  }

}
