import { HomepageRadioPage } from './../homepage-radio/homepage-radio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from "../register/register";
import { Login_1Page } from '../login-1/login-1';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  public goToRegister() {
    this.navCtrl.setRoot(RegisterPage)
  }

  public goToLogin1() {
    this.navCtrl.setRoot(Login_1Page)
  }

  public goToHomePage() {
    this.navCtrl.setRoot(HomepageRadioPage)
  }
}
