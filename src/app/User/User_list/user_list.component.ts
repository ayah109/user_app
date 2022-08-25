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
  users :{
    id:number,
    first_Name:string,
    last_Name:string,
    numb: number,
     age: number,
    bairthDate:Date,
     email:string,
     pass:number;}[]=[];

  constructor(private obj :UserService ,  public routering :Router) { }
  public UserList = new Array<any>();

  ngOnInit(): void {

    this.obj.getUser().subscribe(res=>
    {
     console.log(res)
      this.UserList = res;
    });
  }

   user: UserVM = { id:0, first_Name:'', last_Name:'', numb: 0, age: 0, bairthDate:new Date(), email:'', pass:0 };

  // console.log(localStorage.getItem("token"));

   addUser(users: UserVM) {
     this.obj.postUser(users).subscribe(res=>
     {
       console.log(res)
       this.user = res;
     });

  }

   deleteUser(user:UserVM){
    let i = this.UserList.indexOf(user);
    if (i>= 0){
      this.UserList.splice(i,1);
    }
}

EditUser(user:UserVM){
//  let i = this.obj.UserList.indexOf(user);
this.routering.navigate(['/User/form'])
}
}
