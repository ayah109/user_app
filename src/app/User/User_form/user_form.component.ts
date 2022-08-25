import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { UserService, UserVM } from "src/app/User.service";
//import {UserPipePipe} from "../../userPipe.pipe";

@Component({
    selector: 'app-User_form',
    templateUrl: './user_form.component.html',
    styleUrls: ['./user_form.component.css']

  })

export class user_formComponent implements OnInit {

  newUser: UserVM ={id: 0, first_Name:'', last_Name:'',numb: 0, age: 0, bairthDate:new Date(), email:'', pass:0 }
  public UserList: UserVM[]=[];

  constructor(private obj :UserService, public routering :Router) { }
  ngOnInit(): void {

  }

  addUser(form: NgForm){
    if(!form.form.valid){
      form.form.markAllAsTouched();
    }else{
      this.obj.postUser(this.newUser).subscribe(users => this.UserList.push(users))
      this.routering.navigate(['/User/list'])
    }
  }
  EditUser(form: NgForm){


  }
  }





