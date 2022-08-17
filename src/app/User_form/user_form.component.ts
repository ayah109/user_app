import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from '@angular/forms';
import { UserVM } from '../app.component';



@Component({
    selector: 'app-User_form',
    templateUrl: './user_form.component.html',
    styleUrls: ['./user_form.component.css']
    
  })
 
export class user_formComponent implements OnInit {
  
  newUser: UserVM ={name:'', numb:0, age: 0, email:'', pass:0 }
  @Output() user = new EventEmitter<UserVM>();

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
  
  }
  

 


