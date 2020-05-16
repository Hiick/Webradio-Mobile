import { Login_1Page } from './../pages/login-1/login-1';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


//http request
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

//FB
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
//ENDFB

//Observable
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import { Observable } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';

//ROUTING

//import { AppRoutingModule } from '../../routing-app/src/app/app-routing.module';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { RadioSubscribePage } from '../pages/radio-subscribe/radio-subscribe';
import { AccountPage } from '../pages/account/account';
import { HomepageRadioPage } from '../pages/homepage-radio/homepage-radio';
import { HomepageChainePage } from '../pages/homepage-chaine/homepage-chaine';
import { Chaine_9Page } from '../pages/chaine-9/chaine-9';
import { ChaineRecPage } from '../pages/chaine-rec/chaine-rec';


//FB
const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2203659926599837')
  }
]);

export function provideConfig() {
  return config;
}
//ENDFB


//ROUTING
//import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsPage } from '../pages/account-settings/account-settings';
import { Chaine_1Page } from '../pages/chaine-1/chaine-1';
import { RadioRec_1Page } from '../pages/radio-rec-1/radio-rec-1';
import { NotificationPage } from '../pages/notification/notification';
import { PasswordChangePage } from '../pages/password-change/password-change';

// sets up routes constant where you define your routes
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    LoginPage,
    Login_1Page,
    RadioSubscribePage,
    AccountPage,
    HomepageRadioPage,
    HomepageChainePage,
    Chaine_9Page,
    ChaineRecPage,
    AccountSettingsPage,
    Chaine_1Page,
    RadioRec_1Page,
    NotificationPage,
    PasswordChangePage
  ],
  imports: [
    BrowserModule,
    //FB
    SocialLoginModule,
    //ENDFB
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    LoginPage,
    Login_1Page,
    RadioSubscribePage,
    AccountPage,
    HomepageRadioPage,
    HomepageChainePage,
    Chaine_9Page,
    ChaineRecPage,
    AccountSettingsPage,
    Chaine_1Page,
    RadioRec_1Page,
    NotificationPage,
    PasswordChangePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler, },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
})
export class AppModule {}
