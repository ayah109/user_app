import { Component } from '@angular/core';

export interface UserVM{
  name: string,
  numb: number,
   age: number, 
   email:string,
   pass:number;
}
@Component({
  selector: 'app-User_list',
  templateUrl: './user_list.component.html',
  styleUrls: ['./user_list.component.css']
})

export class user_listComponent {
  

  UserList: UserVM[]=[
    {
      name:'Aya ',
      numb: 597902289,
      age: 22,
      email:'aya@gmail.com',
      pass:12345
  },
  {
    name:'Bayan  ',
    numb: 597511401,
    age: 16,
    email:'bayan@gmail.com',
    pass:123123
}
   ];

   user: UserVM = { name: '', numb: 0, age: 0, email: '', pass: 0 };
   

   addUser(user: UserVM) {
    this.UserList.push(user);
  }

   deleteUser(user:UserVM){
    let i = this.UserList.indexOf(user);
    if (i>= 0){
      this.UserList.splice(i,1);
    }
}

// EditUser(user:UserVM){
//   let i = this.UserList.indexOf(user);
//   if (i >= 0){
//     this.Ubdated = {...user}
//    // this.UserList.splice(i,1);
    

//   }   
// }
}
