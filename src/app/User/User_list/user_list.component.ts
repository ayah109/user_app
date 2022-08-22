import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, UserVM } from 'src/app/User.service';
//import {UserPipePipe} from "../../userPipe.pipe";


@Component({
  selector: 'app-User_list',
  templateUrl: './user_list.component.html',
  styleUrls: ['./user_list.component.css']
})

export class user_listComponent {
  users :{ name: string,
    numb: number,
     age: number,
    bairthDate:Date,
     email:string,
     pass:number;}[]=[];

  constructor(private obj :UserService ,  public routering :Router) { }
  ngOnInit(): void {
    this.users=this.obj.UserList;
  }

   user: UserVM = { name: '', numb: 0, age: 0, bairthDate:new Date(),email: '', pass: 0 };


   addUser(user: UserVM) {
    this.obj.UserList.push(user);
  }

   deleteUser(user:UserVM){
    let i = this.obj.UserList.indexOf(user);
    if (i>= 0){
      this.obj.UserList.splice(i,1);
    }
}

EditUser(user:UserVM){
//  let i = this.obj.UserList.indexOf(user);
this.routering.navigate(['/User/form'])
}
}
