import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Form } from './form';

let testForm: Form = {
  input_type: "form",
  id: "authentication",
  full_name: "authentication",
  disabled: false,
  label: null,
  valid: true,
  required: true,
  size: null,
  compound: true,
  value: null,
  submitted: false,
  errors: [],
  children: [
    {
      input_type: "text",
      id: "authentication_login",
      full_name: "authentication[login]",
      disabled: false,
      label: "Электронная почта или телефон",
      valid: true,
      required: true,
      size: null,
      compound: false,
      value: "",
      submitted: false,
      errors: [],
      children: []
    },
    {
      input_type: "password",
      id: "authentication_password",
      full_name: "authentication[password]",
      disabled: false,
      label: "Пароль",
      valid: true,
      required: true,
      size: null,
      compound: false,
      value: "",
      submitted: false,
      errors: [],
      children: []
    }
  ]
}

@Injectable()
export class AuthService {

  private formUrl = 'assets/form.json';  // URL to web api
  private authUrl = 'assets/auth';  // URL to web api

  constructor(private http: Http) { }

  //getAuthForm(): Promise<Form> {
  //  return Promise.resolve(testForm);
  //}
  getAuthForm(): Promise<Form> {
    return this.http.get(this.formUrl)
      .toPromise()
      .then(response => response.json().data as Form)
      .catch(this.handleError);
  }

  getAuthFormSlowly(): Promise<Form> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getAuthForm()), 2000);
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

