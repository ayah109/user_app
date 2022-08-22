import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { user_listComponent } from './User_list/user_list.component';
import { user_formComponent } from './User_form/user_form.component';
import { UserRoutingModule } from './User_route.module';
import {AppModule} from "../app.module";

@NgModule({
  declarations: [
    user_formComponent,
    user_listComponent
  ],

  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule,
    AppModule
  ],

})
export class UserModule { }
