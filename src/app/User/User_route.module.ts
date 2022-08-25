import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { user_formComponent } from './User_form/user_form.component';
import { user_listComponent } from './User_list/user_list.component';
import {user_postComponent} from "./User_post/user_post.compnent";



const appRoute :Routes =[
    {path : 'list' , component : user_listComponent},
    {path : 'form' , component : user_formComponent},
    {path : 'post' , component : user_postComponent},
    {path : ':id' , component : user_formComponent}


  ]

@NgModule({
  imports: [RouterModule.forChild(appRoute)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
