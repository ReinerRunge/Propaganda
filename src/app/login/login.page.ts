import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/services/auth-service';

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

  constructor(public formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      emailaddress: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    const formData = this.loginForm.value;

    this.auth.signInWithEmail(formData.emailaddress, formData.password).then( 
      () => this.router.navigate(['/home']),
      error => this.error = error.message
    );

  }

  forgotPasword() {

  }

  keyPress(keyCode) {
    if (keyCode === 13) { // user pressed enter
      this.login();
    }
  }
}
