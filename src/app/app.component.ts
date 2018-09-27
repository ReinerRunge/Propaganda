import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController, Platform } from '@ionic/angular';
import { AuthService } from '../providers/services/auth-service';
import { UpdateService } from '../providers/services/update-service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  loggedIn: boolean;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private update: UpdateService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });


    this.attemptLogin();
    
  }

  async attemptLogin() {
    const loading = await this.loadingCtrl.create({
      message: 'attempting autologin...',
    });

    await loading.present();
    this.auth.afAuth.authState.subscribe(
      user => {
        if (user) {
          loading.dismiss();
          this.router.navigate(['home']);
        } else {
          loading.dismiss();
          this.router.navigate(['login']);
        }

      },
      () => {
        loading.dismiss();
        this.router.navigate(['login']);
      }
    );
  }

}
