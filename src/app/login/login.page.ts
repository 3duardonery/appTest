import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserAuth } from '../models/user-auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private alertController: AlertController,
              private router: Router) {
    this.loginForm = formBuilder.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  login(formValue: any): void {
    let userLogin = new UserAuth();
    userLogin.email = formValue.email;
    userLogin.password = formValue.password;
    if (this.auth.login(userLogin)) {
      this.router.navigate(['home']);
    } else {
      this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Dados inválidos',
      message: 'Usuário/Senha inválidos',
      buttons: ['OK']
    });

    await alert.present();
  }

}
