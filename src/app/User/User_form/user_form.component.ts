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

  public newUser: UserVM ={name:'', numb:0, age: 0,bairthDate:new Date(), email:'', pass:0 }


  constructor(private obj :UserService, public routering :Router) { }
  ngOnInit(): void {

  }

  addUser(form: NgForm){
    if(!form.form.valid){
      form.form.markAllAsTouched();
    }else{
      this.obj.UserList.push(this.newUser);
      this.routering.navigate(['/User/list'])
    }
  }
  }





