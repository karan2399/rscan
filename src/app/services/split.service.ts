import { Injectable } from '@angular/core';
import { Item } from '../models/item.modal';
import { User } from '../models/user.modal';
@Injectable({
    providedIn: 'root'
})
export class SplitService {


    private items: Item[] = [];
    // private users: string[] = ['All', 'Karan', 'Vishal', 'Henil', 'DK', 'Pandya', 'Tej', 'DJ']; // Example users list
    public users: string[] = [];


    constructor() { 
      this.loadUsers();
    }

    addUser(user: string) {
      if (!this.users.includes(user)) {
        this.users.push(user);
      }
    }

    
    removeUser(user: string) {
      this.users = this.users.filter(u => u !== user);
    }
  
    setUsers(users: string[]) {
      this.users = users;
    }
  
    private loadUsers() {
      const users = localStorage.getItem('users');
      if (users) {
        this.users = JSON.parse(users);
      } else {
        this.users = [];
      }
    }




    addItem(itemName: string, itemPrice: number, selectedUsers: string[], taxPercent: number) {
      const totalPrice = itemPrice + (itemPrice * taxPercent / 100);
  
      // Check if an item with the same users combination already exists
      const existingItem = this.items.find(item => this.areArraysEqual(item.users, selectedUsers) && item.taxPercent === taxPercent);
  
      if (existingItem) {
        // If exists, update the item price and merge item names (if not already added)
        existingItem.itemPrice += itemPrice;
        existingItem.totalPrice += totalPrice;
        if (!existingItem.itemName.includes(itemName)) {
          existingItem.itemName += `, ${itemName}`;
        }
      } else {
        // If not exists, add a new item
        this.items.push({ itemName, itemPrice, users: selectedUsers, taxPercent, totalPrice });
      }
    }

    private areArraysEqual(array1: any[], array2: any[]): boolean {
        if (array1.length !== array2.length) {
            return false;
        }
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }
    


    getItems(): Item[] {
      return this.items;
    }
    getUsers() {
        return this.users;
    }

    getUserGroupOwingSummary(): { userGroup: string[], totalOwed: number, userDetails: { userName: string, amountOwed: number }[] }[] {
        const userGroupOwingSummary: { [userGroup: string]: { totalOwed: number, userDetails: { userName: string, amountOwed: number }[] } } = {};
    
        // Iterate through each item to calculate each user's share in the group
        this.items.forEach(item => {
          const { itemName, itemPrice, users } = item;
          const splitAmount = itemPrice / users.length;
          const userGroupKey = users.join(', ');
    
          if (!userGroupOwingSummary[userGroupKey]) {
            userGroupOwingSummary[userGroupKey] = { totalOwed: 0, userDetails: [] };
            users.forEach(user => {
              userGroupOwingSummary[userGroupKey].userDetails.push({ userName: user, amountOwed: 0 });
            });
          }
    
          userGroupOwingSummary[userGroupKey].totalOwed += itemPrice;
    
          users.forEach(user => {
            const userDetail = userGroupOwingSummary[userGroupKey].userDetails.find(detail => detail.userName === user);
            if (userDetail) {
              userDetail.amountOwed += splitAmount;
            }
          });
        });
    
        // Convert object to array for easier iteration in templates
        return Object.keys(userGroupOwingSummary).map(userGroupKey => ({
          userGroup: userGroupKey.split(', '),
          totalOwed: userGroupOwingSummary[userGroupKey].totalOwed,
          userDetails: userGroupOwingSummary[userGroupKey].userDetails
        }));
      }

      getTotalOwedByEachUser(): { userName: string, totalOwed: number, totalTax: number }[] {
        const totalOwedByUser: { [userName: string]: { amountOwed: number, taxOwed: number } } = {};
    
        // Initialize total owed and tax owed for each user
        this.users.forEach(user => {
          totalOwedByUser[user] = { amountOwed: 0, taxOwed: 0 };
        });
    
        // Iterate through each item to calculate the total amount and tax owed by each user
        this.items.forEach(item => {
          const { totalPrice, itemPrice, users, taxPercent } = item;
          const splitAmount = itemPrice / users.length;
          const splitTax = (itemPrice * taxPercent / 100) / users.length;
    
          users.forEach(user => {
            totalOwedByUser[user].amountOwed += splitAmount;
            totalOwedByUser[user].taxOwed += splitTax;
          });
        });
    
        // Convert object to array for easier iteration in templates
        return Object.keys(totalOwedByUser).map(userName => ({
          userName,
          totalOwed: totalOwedByUser[userName].amountOwed + totalOwedByUser[userName].taxOwed,
          totalTax: totalOwedByUser[userName].taxOwed
        }));
      }

      getTotalBillAmount(): number {
        return this.items.reduce((total, item) => total + item.totalPrice, 0);
      }

      getItemsSharedPerGroup(): { userGroup: string[], items: { itemName: string, itemPrice: number, taxPercent: number, totalPrice: number }[] }[] {
        const itemsPerGroup: { [userGroup: string]: { itemName: string, itemPrice: number, taxPercent: number, totalPrice: number }[] } = {};
    
        // Iterate through each item to organize them by user group
        this.items.forEach(item => {
          const { itemName, itemPrice, taxPercent, totalPrice, users } = item;
          const userGroupKey = users.join(', ');
    
          if (!itemsPerGroup[userGroupKey]) {
            itemsPerGroup[userGroupKey] = [];
          }
    
          itemsPerGroup[userGroupKey].push({ itemName, itemPrice, taxPercent, totalPrice });
        });
    
        // Convert object to array for easier iteration in templates
        return Object.keys(itemsPerGroup).map(userGroupKey => ({
          userGroup: userGroupKey.split(', '),
          items: itemsPerGroup[userGroupKey]
        }));
      }
    

      deleteItem(item: { itemName: string, itemPrice: number, users: string[], taxPercent: number, totalPrice: number }): void {
        const index = this.items.findIndex(i => 
          i.itemName === item.itemName && 
          i.itemPrice === item.itemPrice && 
          this.areArraysEqual(i.users, item.users) &&
          i.taxPercent === item.taxPercent &&
          i.totalPrice === item.totalPrice
        );
    
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      }
}
