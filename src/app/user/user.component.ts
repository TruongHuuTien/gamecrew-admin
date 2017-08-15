import { Component, NgModule } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
  constructor (public activeModal: NgbActiveModal) {}
}
