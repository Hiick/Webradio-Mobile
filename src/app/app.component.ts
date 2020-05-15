import { ChaineRecPage } from './../pages/chaine-rec/chaine-rec';


import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RegisterPage } from './../pages/register/register';

//import { Login_1Page } from './../pages/login-1/login-1';
//import { TabsPage } from '../pages/tabs/tabs';
//import { LoginPage } from '../pages/login/login';
//import { RadioSubscribePage } from '../pages/radio-subscribe/radio-subscribe';

import { AccountPage } from '../pages/account/account';
//import { HomepageRadioPage } from '../pages/homepage-radio/homepage-radio';
//import { HomepageChainePage } from '../pages/homepage-chaine/homepage-chaine';
import { Chaine_9Page } from '../pages/chaine-9/chaine-9';
//import { ChaineRecPage } from '../pages/chaine-rec/chaine-rec';
import { AccountSettingsPage } from '../pages/account-settings/account-settings';

//import { AccountPage } from '../pages/account/account';
//import {HomepageRadioPage} from '../pages/homepage-radio/homepage-radio';
//import { HomepageChainePage } from '../pages/homepage-chaine/homepage-chaine';
//import { Chaine_9Page } from '../pages/chaine-9/chaine-9';
//import { ChaineRecPage } from '../pages/chaine-rec/chaine-rec';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any = LoginPage;



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


// export class MyApp { //ORIGINAL

//   rootPage:any = RegisterPage;

//   constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
//     platform.ready().then(() => {
//       // Okay, so the platform is ready and our plugins are available.
//       // Here you can do any higher level native things you might need.
//       statusBar.styleDefault();
//       splashScreen.hide();
//     });
//   }
// }