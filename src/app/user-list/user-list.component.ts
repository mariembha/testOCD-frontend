import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/User.model';
import { Subscription } from 'rxjs';
import {RouterModule} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  fileToUpload: File = null;


  users: User[];
  userSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
   this.findAllUsers();
  }
  

  findAllUsers(){
    this.userService.getAll()
   .subscribe(users=> this.users=users)
  }

deleteUser (id) {
  this.userService.delete(id)
   .subscribe(res => this.findAllUsers())
}


  ngOnDestroy() {
   // this.userSubscription.unsubscribe();
  }
  



  onSwitch(user) {
    user.active = !user.active;
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

}