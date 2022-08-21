import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { user_formComponent } from './User_form/user_form.component';
import { user_listComponent } from './User_list/user_list.component';


const appRoute :Routes =[
    {path : 'list' , component : user_listComponent},
    {path : 'form' , component : user_formComponent},
    {path : ':id' , component : user_formComponent},
  
  ]

@NgModule({
  imports: [RouterModule.forChild(appRoute)],
  exports: [RouterModule]
})

export class UserRoutingModule { }