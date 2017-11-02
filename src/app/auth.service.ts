import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Form, HashString } from './form';

let testForm: Form = <Form>{
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

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private formUrl = 'assets/form.json';  // URL to web api
  private authUrl = 'http://test.2garin.com/auth.php';  // URL to web api

  constructor(private http: Http) { }

  //getAuthForm(): Promise<Form> {
  //  return Promise.resolve(testForm);
  //}
  getAuthForm(): Promise<Form> {
    return this.http.get(this.formUrl)
      .toPromise()
      //.then(response => response.json() as Form)
      //.then(response => <Form>(response.json()))
      .then((response) => {
        let form = new Form(response.json() as Form);
        console.log('form = ', form);
        return form;
      })
      .catch(this.handleError);
  }

  getAuthFormSlowly(): Promise<Form> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getAuthForm()), 2000);
    });
  }

  // ответ с ошибкой
  // {"server error":"Geesys user not found.","trace":[{"file":"\/home\/api\/www\/api\/Geesys\/Repositories\/CombinedUserRepository.php","line":52,"function":"loadByEmail","class":"Geesys\\Repositories\\DbUserRepository","type":"->","args":["login@dwqe.ru"]},{"file":"\/home\/api\/www\/api\/webservice\/Controllers\/UserController.php","line":150,"function":"loadByEmail","class":"Geesys\\Repositories\\CombinedUserRepository","type":"->","args":["login@dwqe.ru"]},{"function":"authenticateAction","class":"webservice\\Controllers\\UserController","type":"->","args":[{"attributes":{},"request":{},"query":{},"server":{},"files":{},"cookies":{},"headers":{}}]},{"file":"\/home\/api\/www\/api\/webservice\/FrontController.php","line":56,"function":"call_user_func_array","args":[[{},"authenticateAction"],[{"attributes":{},"request":{},"query":{},"server":{},"files":{},"cookies":{},"headers":{}}]]},{"file":"\/home\/api\/www\/api\/www\/index.php","line":78,"function":"execute","class":"webservice\\FrontController","type":"->","args":[]}]}
  auth(data: any): Promise<boolean> {
    return this.http
      .post(this.authUrl, JSON.stringify(data), { headers: this.headers })
      .toPromise()
      .then((res) => {
        let answer = res.json();
        if (typeof answer['server error'] !== 'undefined') throw answer['server error'];
        return true;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

