import { Component, computed, Input, input } from '@angular/core';
//Input with upper case is a  decorator with lower case its a special function

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
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  //below we are saying typescript string will be recieved in future
  //in this below input we can pass an intial value but when passing required we cannot apply intial value

  avatar = input.required<string>();
  name = input.required<string>();

  //these input are read only they change when they read some change outside for exaple in app.component.html
  //we cannot change them inside the class

  //but outside we still set the input as same with property bindings
  //we no longer need an ! mark because we are not setting up a property which doesnot have an intial value

  //by setting required:true you are telling angular that property must be there

  imagePath = computed(() => 'assets/users/' + this.avatar());

  //with the help of computed we made it signal
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {}
}

//we are accessing inside class not in template so thats why this.selectedUser.avatar
