import { Component, Input } from '@angular/core';
import { Form } from './form';

@Component({
  selector: 'beuse-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() form: Form;
  @Input() submit: (event: Event) => boolean;

  onSubmit(event: Event): boolean {
    return this.submit(event);
  }
}
