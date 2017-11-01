import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    AppComponent, FormComponent, ProfileComponent
  ],
  imports: [
    BrowserModule, HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
