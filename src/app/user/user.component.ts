import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
//Input with upper case is a  decorator with lower case its a special function
//alias

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

//interface

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
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selector!: boolean;
  //@input will be mark this property setable from outside
  // @Input({ required: true }) id!: string; //mene yeh input apne parent element se liya by using property binding than isi input ko mene output kiya @Output se
  //phir is output ko mene waha catch kiya is tarah (select)="onSelectUser($event)"
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Output()
  select = new EventEmitter();

  // select = output<string>();
  //below output is just replacement of above code it does the same way
  //this output doesnot create a signal unlike input function it still an event emitter

  //we expectially dont need to create event emitter when using output function but its actually done for you

  //this select will recieve an intial input unlike @Input and that inital value is EventEmitter

  //by setting required:true you are telling angular that property must be there

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

//we are accessing inside class not in template so thats why this.selectedUser.avatar
