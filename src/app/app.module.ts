import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app_route.module';
import {UserPipePipe} from "./userPipe.pipe";


@NgModule({
  declarations: [
    AppComponent,
    UserPipePipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],

  providers: [],
  exports: [
    UserPipePipe

  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
