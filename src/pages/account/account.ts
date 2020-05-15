import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { RadioSubscribePage } from '../radio-subscribe/radio-subscribe';
import { LoginPage } from '../login/login';
import { AccountSettingsPage } from '../account-settings/account-settings';
import { HomePage } from '../home/home';
=======
>>>>>>> f550f729f10ee99323e6210f098db9a3c6e0dd01

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

<<<<<<< HEAD
public goToHomepage() {
    this.navCtrl.setRoot(HomePage)
  }

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage)
  }

  public goToAccountSettings() {
    this.navCtrl.setRoot(AccountSettingsPage)
  }
=======
>>>>>>> f550f729f10ee99323e6210f098db9a3c6e0dd01
}
