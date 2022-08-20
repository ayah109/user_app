import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { user_formComponent } from './User_form/user_form.component';
import { user_listComponent } from './User_list/user_list.component';
import { Route, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app_route.module';



@NgModule({
  declarations: [
    AppComponent,
    user_formComponent,
    user_listComponent
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
