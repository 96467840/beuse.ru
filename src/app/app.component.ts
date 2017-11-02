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
  isAuth = false;
  error: string = null;
  loginForm: Form;

  constructor(private authService: AuthService) { }

  getAuthForm(): void {
    this.authService.getAuthForm().then(form => this.loginForm = form);
    /*this.authService.getAuthForm().then((form) => {
      console.log('!!!!!!', form);
      this.loginForm = form;
    });*/
  }

  ngOnInit(): void {
    this.getAuthForm();
  }

  onAuth(event: Event): boolean {
    let that = this;
    console.log('Auth ...', that.loginForm, event);
    this.error = null;
    event.preventDefault();
    if (that.loginForm.check()) {
      that.authService.auth(that.loginForm.serialize())
        .then(res => that.isAuth = res)
        // в случае ошибки считаем что аутентификация не удалась
        .catch((error) => {
          that.error = error;
          that.isAuth = false;
        });
    }
    return false;
  }

  onLogout(): void {
    //console.log('Logout ...', this);
    this.isAuth = false;
  }
}
