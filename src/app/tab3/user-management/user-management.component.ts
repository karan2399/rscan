import { Component } from '@angular/core';
import { SplitService } from 'src/app/services/split.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {
  newUser: string = '';
  isToastOpen = false;
  isRToastOpen = false;

  constructor(public splitService: SplitService) {
    this.loadUsers();
  }

  addUser() {
    if (this.newUser.trim()) {
      this.splitService.addUser(this.newUser.trim());
      this.newUser = '';
      // this.saveUsers();
    }
  }

  doneAddingUsers(){
    this.saveUsers();
  }

  removeUser(user: string) {
    this.splitService.removeUser(user);
    this.setROpen(true);
    // this.saveUsers();
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.splitService.getUsers()));
    this.setOpen(true);
  }

  private loadUsers() {
    const users = localStorage.getItem('users');
    if (users) {
      this.splitService.setUsers(JSON.parse(users));
    }
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  setROpen(isROpen:boolean){
    this.isRToastOpen = isROpen;
  }

}
