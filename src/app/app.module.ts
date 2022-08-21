import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app_route.module';
import { UserRoutingModule } from './User/User_route.module';
import { user_formComponent } from './User/User_form/user_form.component';
import { user_listComponent } from './User/User_list/user_list.component';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
