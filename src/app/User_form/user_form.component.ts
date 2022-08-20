import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { NgForm } from '@angular/forms';
//import { UserVM } from './User_list/user_list.component';

export interface UserVM{
  name: string,
  numb: number,
   age: number, 
   email:string,
   pass:number;
}

@Component({
    selector: 'app-User_form',
    templateUrl: './user_form.component.html',
    styleUrls: ['./user_form.component.css']
    
  })
 
export class user_formComponent implements OnInit {
  
  //newUser: UserVM ={name:'', numb:0, age: 0, email:'', pass:0 }
  @Output() user = new EventEmitter<UserVM>();
  @Input() newUser: UserVM ={name:'', numb:0, age: 0, email:'', pass:0 }
  //@Input() Ubdated: UserVM={name:'', numb:0, age: 0, email:'', pass:0 };
  
  constructor() { }
  ngOnInit(): void {
  }

  addUser(form: NgForm){
    console.log(form.form.value,this.newUser);
    if(!form.form.valid){
      form.form.markAllAsTouched();
    }else{
      this.user.emit(this.newUser);
    }
  }

//   UbdateUser(form: NgForm){
//     this.Ubdated.name = this.newUser.name;
//     this.Ubdated.numb = this.newUser.numb;
//     this.Ubdated.age = this.newUser.age;
//     this.Ubdated.email = this.newUser.email;
//     this.Ubdated.pass = this.newUser.pass;
// }
  
  }
  

 


