// так как свойства формы и поля абсолютно идентичны, то вынесем все свойства в общего предка
export abstract class FormBase {
  input_type: string;
  id: string;
  full_name: string;
  disabled: boolean;
  label: string;
  valid: boolean;
  required: boolean;
  size: string;
  compound: boolean;
  value: string;
  submitted: boolean;
  errors: string[];
  children: FormBase[];
}

export class Form extends FormBase {

}

export class Field extends FormBase {

}
