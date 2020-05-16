import { HomepageRadioPage } from './../homepage-radio/homepage-radio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login_1Page } from '../login-1/login-1';
import { RegisterPage } from '../register/register';
import { NotificationPage } from '../notification/notification';
import { AccountSettingsPage } from '../account-settings/account-settings';

/**
 * Generated class for the RadioRec_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-radio-rec-1',
  templateUrl: 'radio-rec-1.html',
})
export class RadioRec_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioRec_1Page');
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

  public goToHomeP() {
    this.navCtrl.setRoot(HomepageRadioPage)
  }

  public goToNotification() {
    this.navCtrl.setRoot(NotificationPage)
  }

  public goToAccount() {
    this.navCtrl.setRoot(AccountSettingsPage)
  }
}
