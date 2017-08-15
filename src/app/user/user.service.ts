import { Injectable } from '@angular/core';
import { User } from './user';

const MOCK_USERS:User[] = [{
  id: 0,
  email: "toto",
  password: "toto",
  isAdmin: false
}];


@Injectable()
export class UserService {
  getUsers(): User[] {
    return MOCK_USERS;
  }
  newUser(): User {
    return {
      email: "",
      password: "",
      isAdmin: false
    };
  }
}
