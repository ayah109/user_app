import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { user_listComponent } from './User_list/user_list.component';
import { user_formComponent } from './User_form/user_form.component';
import { UserRoutingModule } from './User_route.module';
import {UserPipePipe} from "../userPipe.pipe";
import {user_postComponent} from "./User_post/user_post.compnent";

@NgModule({
  declarations: [
    user_formComponent,
    user_listComponent,
    user_postComponent,
    UserPipePipe

  ],

  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule
  ],

})
export class UserModule { }
