import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any = {
    email: '',
    password: ''
  }

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  login(formValue: any): void {
    console.log(formValue);
  }

}
