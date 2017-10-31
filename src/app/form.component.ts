import { Component, Input } from '@angular/core';
import { Form } from './form';

@Component({
  selector: 'beuse-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  @Input() form: Form;
}
