import { Component, NgModule, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export class User {
  id?: number;
  email: string;
  isAdmin: boolean;
}

const USERS:User[] = [{
  id: 0,
  email: "toto",
  isAdmin: false
}];


@Component({
  selector: 'UsersComponent',
  templateUrl: './users.component.html',
})
export class UsersComponent {
  public users = USERS;

  constructor(private modalService: NgbModal) {}

  openCreateUserModal() {
    const modalRef = this.modalService.open(UserCreateComponent);
  }
}


@Component({
  selector: 'UsersComponent',
  templateUrl: './user.create.component.html',
})
export class UserCreateComponent {
  private user:User = {
    email: "",
    isAdmin: false,
  };

  constructor (public activeModal: NgbActiveModal) {}

  createUserSubmit() {
    console.log(this.user);
  }
}
