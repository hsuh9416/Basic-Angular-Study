import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

//ng generate component user
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // state that can be changed -> zone.js
  // selectedUser = DUMMY_USERS[randomIndex];

  // Using signal
  selectedUser = signal(DUMMY_USERS[randomIndex])

  // get imagePath(){ // getter
  //   return 'assets/users/' + this.selectedUser.avatar
  // }
  
  // Using computed with signal
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  onSelectUser(){ // event - random profile change
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
