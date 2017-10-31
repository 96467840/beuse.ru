
export class Form {
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
  children: Form[];
}
