import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
=======
import {RegisterPage} from "../register/register";
>>>>>>> f550f729f10ee99323e6210f098db9a3c6e0dd01

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

<<<<<<< HEAD
=======
  public goToRegister() {
    this.navCtrl.setRoot(RegisterPage)
  }

>>>>>>> f550f729f10ee99323e6210f098db9a3c6e0dd01
}
