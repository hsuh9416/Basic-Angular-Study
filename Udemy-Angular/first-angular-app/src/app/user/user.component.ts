import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

//ng generate component user
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // state that can be changed -> zone.js
  selectedUser = DUMMY_USERS[Math.floor(Math.random()* DUMMY_USERS.length)];

  get imagePath(){ // getter
    return 'assets/users/' + this.selectedUser.avatar
  }

  onSelectUser(){ // event - random profile change
    this.selectedUser = DUMMY_USERS[Math.floor(Math.random()* DUMMY_USERS.length)];
  }
}
