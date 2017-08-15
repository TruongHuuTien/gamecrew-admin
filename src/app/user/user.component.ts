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
  public user;
  public userService: UserService = new UserService;
  public activeModal: NgbActiveModal;

  constructor (public ngbActiveModal: NgbActiveModal) {
    this.activeModal = ngbActiveModal;
    this.user = this.userService.newUser();
  }

  createUserSubmit() {
    this.userService.createUser(this.user);
    this.activeModal.close('Submit')
  }
}
