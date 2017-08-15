import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UsersComponent, UserCreateComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCreateComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule ,
    RouterModule.forRoot([{
      path: 'users',
      component: UsersComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UserCreateComponent]
})
export class AppModule { }
