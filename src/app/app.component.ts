import { Component, output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser: string = '';

  onSelectUser(id: string) {
    console.log(id);
    const user = this.users.find((user) => user.id === id);
    if (user) {
      console.log(`ID: ${id}, Name: ${user.name}`);
      this.selectedUser = user.name;
    } else {
      console.log(`User with ID: ${id} not found`);
    }
  }
}
