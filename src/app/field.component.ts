import { Component, Input } from '@angular/core';
import { Field } from './form';

@Component({
  selector: 'beuse-field',
  templateUrl: './field.component.html'
})
export class FieldComponent {
  @Input() field: Field;
}
