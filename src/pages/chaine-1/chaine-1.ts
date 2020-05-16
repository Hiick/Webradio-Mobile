import { HomepageRadioPage } from './../homepage-radio/homepage-radio';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { Chaine_9Page } from '../chaine-9/chaine-9';
import { AccountSettingsPage } from '../account-settings/account-settings';
import { NotificationPage } from '../notification/notification';

/**
 * Generated class for the Chaine_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chaine-1',
  templateUrl: 'chaine-1.html',
})
export class Chaine_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chaine_1Page');
  }

  public goToHomePageRadio() {
    this.navCtrl.setRoot(HomepageRadioPage)
  }

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage)
  }

  public goToAccountSettings() {
    this.navCtrl.setRoot(AccountSettingsPage)
  }

  public goToChaine9() {
    this.navCtrl.setRoot(Chaine_9Page)
  }

  public goToNotification() {
    this.navCtrl.setRoot(NotificationPage)
  }
}
