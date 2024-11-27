import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser: any = '';

  onSelectUser(id: string) {
    console.log(id);
    const user = this.users.find((user) => user.id === id);
    if (user) {
      console.log(`ID: ${id}, Name: ${user.name}`);
      this.selectedUser = user;
    } else {
      console.log(`User with ID: ${id} not found`);
    }
  }
}
