import { Component } from '@angular/core';
import { SplitService } from 'src/app/services/split.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {
  newUser: string = '';

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
    // this.saveUsers();
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.splitService.getUsers()));
  }

  private loadUsers() {
    const users = localStorage.getItem('users');
    if (users) {
      this.splitService.setUsers(JSON.parse(users));
    }
  }
}
