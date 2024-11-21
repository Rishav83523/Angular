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
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  //by setting required:true you are telling angular that property must be there

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}
}

//we are accessing inside class not in template so thats why this.selectedUser.avatar
