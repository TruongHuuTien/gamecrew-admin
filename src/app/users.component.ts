import { Component } from '@angular/core';

const USERS = [{
  id: 1,
  name: "toto"
}];

@Component({
  selector: 'UsersComponent',
  templateUrl: './users.component.html',
})
export class UsersComponent {
  public users = USERS;
}
