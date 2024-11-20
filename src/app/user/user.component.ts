import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

//do below so we can access it in html all thing you describe in component will be accessed in html
export class UserComponent {
  //this is a public property
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    // alert('User selected!');
    this.selectedUser.set(
      DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]
    );
  }
}

//we are accessing inside class not in template so thats why this.selectedUser.avatar
