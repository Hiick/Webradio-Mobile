import { HomepageRadioPage } from './../homepage-radio/homepage-radio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chaine_9Page } from '../chaine-9/chaine-9';
import { RadioRec_1Page } from '../radio-rec-1/radio-rec-1';
import { NotificationPage } from '../notification/notification';
import { AccountSettingsPage } from '../account-settings/account-settings';

/**
 * Generated class for the HomepageChainePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homepage-chaine',
  templateUrl: 'homepage-chaine.html',
})
export class HomepageChainePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepageChainePage');
  }

  public goToHomePageRadio() {
    this.navCtrl.setRoot(HomepageRadioPage)
  }

  public goToChaine9() {
    this.navCtrl.setRoot(Chaine_9Page)
  }
  public goToHomePageRadio1() {
    this.navCtrl.setRoot(HomepageRadioPage)
  }

  public goToNotification() {
    this.navCtrl.setRoot(NotificationPage)
  }

  public goToAccount() {
    this.navCtrl.setRoot(AccountSettingsPage)
  }

  public goToRadio() {
    this.navCtrl.setRoot(RadioRec_1Page)
  }
}
