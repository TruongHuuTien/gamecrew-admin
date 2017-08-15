import { Injectable } from '@angular/core';
import { User } from './user';

const MOCK_USERS:User[] = [{
  id: 0,
  email: "admin@gamecrew.com",
  password: "admin",
  isAdmin: false
}];

let users = MOCK_USERS;


@Injectable()
export class UserService {
  getUsers(): User[] {
    return users;
  }
  newUser(): User {
    return {
      email: "",
      password: "",
      isAdmin: false
    };
  }
  createUser(newUser: User): User {
    let user = {
      id: users.length,
      email: newUser.email,
      password: newUser.password,
      isAdmin: newUser.isAdmin
    };
    
    users.push(user);

    return user;
  }
}
