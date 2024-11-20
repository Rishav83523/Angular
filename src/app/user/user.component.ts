import { Component, Input } from '@angular/core';

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

  //@input will be mark this property setable from outside
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}
}

//we are accessing inside class not in template so thats why this.selectedUser.avatar
