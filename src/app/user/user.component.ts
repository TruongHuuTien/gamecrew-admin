import { Component, NgModule, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './user.service';


@Component({
  selector: 'UsersComponent',
  templateUrl: './users.component.html',
  providers: [UserService]
})
export class UsersComponent {
  public users;

  constructor(private userService: UserService, private modalService: NgbModal) {
    this.users = userService.getUsers();
  }

  openCreateUserModal() {
    const modalRef = this.modalService.open(UserCreateComponent);
  }
}


@Component({
  selector: 'UsersComponent',
  templateUrl: './user.create.component.html',
  providers: [UserService]
})
export class UserCreateComponent {
  private user;

  constructor (private userService: UserService, public activeModal: NgbActiveModal) {
    this.user = userService.newUser();
  }

  createUserSubmit() {
    console.log(this.user);

  }
}
