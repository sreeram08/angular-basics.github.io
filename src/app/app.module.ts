import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//manual imported modules
import {RouterModule,Routes} from '@angular/router';
//import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
//imported service
import { ViewserviceService } from './viewservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'details/:url',component:DetailsComponent}
    ]),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ViewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
