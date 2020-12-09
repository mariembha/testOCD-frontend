import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import {Router,RouterModule} from '@angular/router'
import { User } from '../models/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm : FormGroup;
  constructor(private FormBuilder : FormBuilder , private userService:UserService ,private router: Router ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.userForm=this.FormBuilder.group( { firstName:['',Validators.required], lastName :['',Validators.required], email:['',[Validators.required , Validators.email]],pseudo:['',Validators.required] });

  }
  onSubmitForm() {
    const formvalue=this.userForm.value;
    const newUser= new User(formvalue['firstName'], formvalue['lastName'],
    formvalue['email'],
    formvalue['pseudo'],
    false
  );
  this.userService.create(newUser);
  this.router.navigate(['/users']);
}
}
  


