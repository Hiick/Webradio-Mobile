import { HomepageRadioPage } from '../homepage-radio/homepage-radio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RadioSubscribePage } from '../radio-subscribe/radio-subscribe';
import { LoginPage } from '../login/login';
import { AccountSettingsPage } from '../account-settings/account-settings';
import { HomePage } from '../home/home';
import { NotificationPage } from '../notification/notification';
import { AlertController } from 'ionic-angular';
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

public goToHomePage() {
    this.navCtrl.setRoot(HomepageRadioPage)
  }

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage)
  }

  public goToAccountSettings() {
    this.navCtrl.setRoot(AccountSettingsPage)
  }

  public goToNotification() {
    this.navCtrl.setRoot(NotificationPage)
  }
}
