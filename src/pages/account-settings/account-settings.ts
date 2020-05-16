import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { NotificationPage } from '../notification/notification';
import { HomepageRadioPage } from '../homepage-radio/homepage-radio';
import { AccountPage } from '../account/account';
import { PasswordChangePage } from '../password-change/password-change';

/**
 * Generated class for the AccountSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-settings',
  templateUrl: 'account-settings.html',
})
export class AccountSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountSettingsPage');
  }

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage)
  }

  public goToHomePage() {
    this.navCtrl.setRoot(HomepageRadioPage)
  }

  public goToNotification() {
    this.navCtrl.setRoot(NotificationPage)
  }
  
  public goToAccount() {
    this.navCtrl.setRoot(AccountPage)
  }

  public goToPassword() {
    this.navCtrl.setRoot(PasswordChangePage)
  }
}
