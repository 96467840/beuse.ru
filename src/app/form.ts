export interface HashString { [s: string]: string; }

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
  children: Field[];

  constructor(source: FormBase) {
    this.input_type = source.input_type;
    this.id = source.id;
    this.full_name = source.full_name;
    this.disabled = source.disabled;
    this.label = source.label;
    this.valid = source.valid;
    this.required = source.required;
    this.size = source.size;
    this.compound = source.compound;
    this.value = source.value;
    this.submitted = source.submitted;
    this.errors = source.errors;
    this.children = [];//source.children;
    if (source.children != null)
      for (let i = 0, l = source.children.length; i < l; i++) {
        this.children.push(new Field(source.children[i]));
      }
  }
  abstract check(): boolean;

}

export class Form extends FormBase {
  constructor(source: FormBase) {
    super(source);
  }
  /*serialize(): HashString {
    let res: HashString = {};
    for (let i = 0, l = this.children.length; i < l; i++) {
      res[this.children[i].full_name] = this.children[i].value;
    }
    return res;
  }*/
  serialize(): any {
    
    let obj = {};
    for (let i = 0, l = this.children.length; i < l; i++) {
      let tmp = this.children[i].full_name;
      if (tmp.indexOf('[') >= 0)
        tmp = this.children[i].full_name.replace(']', '').split('[')[1];
      
      obj[tmp] = this.children[i].value;
    }
    let res: any = {
      [this.full_name]: obj
    };
    return res;
  }

  check(): boolean {
    this.valid = true;
    // для тестового задания достаточно хранения ошибок в полях. на форме не буду хранить ошибки
    //this.errors = [];
    for (let i = 0, l = this.children.length; i < l; i++) {
      if (!this.children[i].check()) this.valid = false; // достаточно одного не корректно заполненого поля
    }
    return this.valid;
  }
}

export class Field extends FormBase {
  constructor(source: FormBase) {
    super(source);
  }

  check(): boolean {
    // проверка сводится исключительно к проверке обязательности
    this.valid = true;
    this.errors = [];
    if (this.required) {
      if (this.value == '' || this.value == null) {
        this.valid = false;
        this.errors.push('Обязательно для заполнения');
      };
    }
    
    return this.valid;
  }
}

let answer = {
  "server error": "Geesys user not found.",
  "trace": [{
    "file": "\/home\/api\/www\/api\/Geesys\/Repositories\/CombinedUserRepository.php",
    "line": 52,
    "function": "loadByEmail",
    "class": "Geesys\\Repositories\\DbUserRepository",
    "type": "->",
    "args": ["login@dwqe.ru"]
  },
  {
    "file": "\/home\/api\/www\/api\/webservice\/Controllers\/UserController.php",
    "line": 150, "function": "loadByEmail", "class": "Geesys\\Repositories\\CombinedUserRepository", "type": "->", "args": ["login@dwqe.ru"]
  },
  {
    "function": "authenticateAction", "class": "webservice\\Controllers\\UserController", "type": "->", "args": [{ "attributes": {}, "request": {}, "query": {}, "server": {}, "files": {}, "cookies": {}, "headers": {} }]
  },
  {
    "file": "\/home\/api\/www\/api\/webservice\/FrontController.php", "line": 56, "function": "call_user_func_array", "args": [[{}, "authenticateAction"], [{ "attributes": {}, "request": {}, "query": {}, "server": {}, "files": {}, "cookies": {}, "headers": {} }]]
  },
  {
    "file": "\/home\/api\/www\/api\/www\/index.php", "line": 78, "function": "execute", "class": "webservice\\FrontController", "type": "->", "args": []
  }]
}

