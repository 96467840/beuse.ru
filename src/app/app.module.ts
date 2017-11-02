import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { FieldComponent } from './field.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    AppComponent, FormComponent, FieldComponent, ProfileComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
