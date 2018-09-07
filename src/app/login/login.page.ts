import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  emailaddress: string;
  password: string;
  error: any;
  loggingIn = false;
  loadingText = 'Logging you in..';

  constructor(public formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      emailaddress: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {

  }

  forgotPasword() {

  }

  keyPress(keyCode) {
    if (keyCode === 13) { // user pressed enter
      this.login();
    }
  }
}
