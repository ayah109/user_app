import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { user_listComponent } from './User_list/user_list.component';
import { user_formComponent } from './User_form/user_form.component';
//import { AppRoutingModule } from '../app_route.module';
import { UserRoutingModule } from './User_route.module';


@NgModule({
  declarations: [
    
    user_formComponent,
    user_listComponent
   
  ],

  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule
  ],

})
export class UserModule { }
