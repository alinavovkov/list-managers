import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  id: number;
  num: number;
  login: string;
  password: string;
  email: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  public editStatus = false;

  public allUsers: User[] = [];
  public currentUser: User = {} as User;
  public user!: [];

  public login!: string;
  public password!: string;
  public email!: string;
  public id = 1;
  public num = 1;

  public userL!: any;
  public userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      login: ['', [Validators.required, Validators.pattern(/^[a-zA-Z&]{4,16}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]{4,16}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)]],
    });
  }

  ngOnInit(): void {
    this.userForm.valueChanges.subscribe(() => {
      this.updateInputStyles();
    });
  }

  updateInputStyles(): void {
    Object.keys(this.userForm.controls).forEach(controlName => {
      const control = this.userForm.get(controlName);
      if (control !== null) {
        const inputElement = document.getElementById(controlName);
        if (control.invalid && (control.dirty || control.untouched)) {
          this.setInputBorderColor(inputElement, 'red');
        } else {
          this.setInputBorderColor(inputElement, 'green');
        }
      }
    });
  }
  setInputBorderColor(inputElement: HTMLElement | null, color: string): void {
    if (inputElement) {
      inputElement.style.border = `1px solid ${color}`;
    }
  }
  addUser(): void {
    const newUser: User = {
      id: this.allUsers.length + 1,
      num: this.allUsers.length + 1,
      login: this.userForm.value.login,
      password: this.userForm.value.password,
      email: this.userForm.value.email,
    };
    this.allUsers.push(newUser);
    this.userForm.reset();
  }
  editUser(id: number): void {
    this.userL = this.allUsers.find((user) => user.id === id);

    if (this.userL) {
      this.editStatus = true;
      this.userForm.patchValue(this.userL);
    } else {
      console.log('User not found.');
    }
  }
  deleteUser(id: number): void {
    console.log(id);
    const index = this.allUsers.findIndex(user => user.id === id);
    if (index !== -1) {
      this.allUsers.splice(index, 1);
      this.updateNumProperties();
    }
  }
  private updateNumProperties(): void {
    for (let i = 0; i < this.allUsers.length; i++) {
      this.allUsers[i].id = i + 1;
    }
  }

  updateUser(): void {
    if (this.userForm.valid) {
      const updatedUser: User = {
        id: this.userL.id,
        num: this.userL.num,
        login: this.userForm.value.login,
        password: this.userForm.value.password,
        email: this.userForm.value.email,
      };
      const index = this.allUsers.findIndex(user => user.id === this.userL.id);
      this.allUsers.splice(index, 1);
      this.allUsers.splice(index, 0, updatedUser);
      this.editStatus = false;
      this.userForm.reset();
    }
}
onSubmit(): void { }
}