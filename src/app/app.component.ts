import { Component } from '@angular/core';
import { FormComponent } from './form.component';
import { Form } from './form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Beuse.Ru';
  isAuth = false;
  form = new Form();
}
