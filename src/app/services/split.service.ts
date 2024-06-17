import { Injectable } from '@angular/core';
import { Item } from '../models/item.modal';
import { User } from '../models/user.modal';
@Injectable({
    providedIn: 'root'
})
export class SplitService {


    private items: Item[] = [];
    private users: string[] = ['All', 'Karan', 'Vishal', 'Henil', 'DK', 'Pandya', 'Tej', 'DJ']; // Example users list

    constructor() { }





    addItem(itemName: string, itemPrice: number, selectedUsers: string[]) {
        // Check if an item with the same users combination already exists
        const existingItemIndex = this.items.findIndex(item => this.areArraysEqual(item.users, selectedUsers));

        if (existingItemIndex !== -1) {
            // If exists, update the item price
            this.items[existingItemIndex].itemPrice += itemPrice;
        } else {
            // If not exists, add a new item
            this.items.push({ itemName, itemPrice, users: selectedUsers });
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
    



    getItems() {
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

      getTotalOwedByEachUser(): { userName: string, totalOwed: number }[] {
        const totalOwedByUser: { [userName: string]: number } = {};
    
        // Initialize total owed for each user
        this.users.forEach(user => {
          if (user !== 'All') {
            totalOwedByUser[user] = 0;
          }
        });
    
        // Iterate through each item to calculate the total amount owed by each user
        this.items.forEach(item => {
          const { itemPrice, users } = item;
          const splitAmount = itemPrice / users.length;
    
          users.forEach(user => {
            if (user !== 'All') {
              totalOwedByUser[user] += splitAmount;
            }
          });
        });
    
        // Convert object to array for easier iteration in templates
        return Object.keys(totalOwedByUser).map(userName => ({
          userName,
          totalOwed: totalOwedByUser[userName]
        }));
      }

      getTotalBillAmount(): number {
        return this.items.reduce((total, item) => total + item.itemPrice, 0);
      }

      getItemsSharedPerGroup(): { userGroup: string[], items: { itemName: string, itemPrice: number }[] }[] {
        const itemsPerGroup: { [userGroup: string]: { itemName: string, itemPrice: number }[] } = {};
    
        // Iterate through each item to organize them by user group
        this.items.forEach(item => {
          const { itemName, itemPrice, users } = item;
          const userGroupKey = users.join(', ');
    
          if (!itemsPerGroup[userGroupKey]) {
            itemsPerGroup[userGroupKey] = [];
          }
    
          itemsPerGroup[userGroupKey].push({ itemName, itemPrice });
        });
    
        // Convert object to array for easier iteration in templates
        return Object.keys(itemsPerGroup).map(userGroupKey => ({
          userGroup: userGroupKey.split(', '),
          items: itemsPerGroup[userGroupKey]
        }));
      }

      deleteItem(item: { itemName: string, itemPrice: number, users: string[] }): void {
        const index = this.items.findIndex(i => 
          i.itemName === item.itemName && 
          i.itemPrice === item.itemPrice && 
          this.areArraysEqual(i.users, item.users)
        );
    
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      }
}
