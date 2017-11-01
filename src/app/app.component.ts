import { Component, OnInit } from '@angular/core';

import { FormComponent } from './form.component';
import { Form } from './form';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  title = 'Beuse.Ru';
  isAuth = !false;
  loginForm: Form;

  constructor(private authService: AuthService) { }

  getAuthForm(): void {
    this.authService.getAuthForm().then((form) => {
      console.log('!!!!!!', form);
      this.loginForm = form;
    });
  }

  ngOnInit(): void {
    this.getAuthForm();
  }

  onLogout(): void {
    //console.log('Logout ...', this);
    this.isAuth = false;
  }
}
