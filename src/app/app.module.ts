import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app_route.module';
import {UserPipePipe} from "./userPipe.pipe";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent

  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
